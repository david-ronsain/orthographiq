import {
	IAnswer,
	ISession,
	ISessionDTO,
	QuestionCategory,
	QuestionDifficulty,
} from '@orthographiq/shared'
import { Session } from '../schemas/session.schema'
import { injectable } from 'tsyringe'

@injectable()
export class SessionRepository {
	async save(session: ISessionDTO): Promise<void> {
		Session.create(session)
	}

	/**
	 * Get a complete session data, including answers and their questions
	 * @param {string} sessionId
	 * @returns {Promise<ISession>}
	 */
	async get(sessionId: string): Promise<ISession> {
		return await Session.aggregate([
			{
				$match: { sessionId },
			},
			{
				$lookup: {
					from: 'questions',
					localField: 'answers.questionId',
					foreignField: '_id',
					as: 'questions',
				},
			},
			{
				$set: {
					answers: {
						$map: {
							input: '$answers',
							in: {
								$mergeObjects: [
									'$$this',
									{
										question: {
											$arrayElemAt: [
												'$questions',
												{
													$indexOfArray: [
														'$questions._id',
														'$$this.questionId',
													],
												},
											],
										},
									},
								],
							},
						},
					},
				},
			},
			{
				$unset: 'questions',
			},
		])
			.exec()
			.then((sessions: ISession[]) =>
				sessions.length
					? sessions.map((session: ISession) =>
							this.mapData(session)
					  )[0]
					: undefined
			)
	}

	/**
	 * Returs the overall percentage of good answers for a category of questions and a session level
	 * @param {QuestionDifficulty} difficulty Session level
	 * @param {QuestionCategory} category
	 * @returns {Promise<number>}
	 */
	async getPctCorrectAnswersByCategoryAndDifficulty(
		difficulty: QuestionDifficulty,
		category: QuestionCategory
	): Promise<number> {
		return await Session.aggregate([
			{
				$match: { level: difficulty },
			},
			{
				$lookup: {
					from: 'questions',
					localField: 'answers.questionId',
					foreignField: '_id',
					as: 'questions',
				},
			},
			{
				$set: {
					answers: {
						$map: {
							input: '$answers',
							in: {
								$mergeObjects: [
									'$$this',
									{
										question: {
											$arrayElemAt: [
												'$questions',
												{
													$indexOfArray: [
														'$questions._id',
														'$$this.questionId',
													],
												},
											],
										},
									},
								],
							},
						},
					},
				},
			},
			{
				$unset: 'questions',
			},
			{
				$project: {
					answers: {
						$filter: {
							input: '$answers',
							as: 'item',
							cond: {
								$and: [
									{
										$eq: [
											'$$item.question.category',
											category,
										],
									},
								],
							},
						},
					},
				},
			},
			{
				$project: {
					count: { $size: '$answers' },
					countCorrect: {
						$size: {
							$filter: {
								input: '$answers',
								as: 'item',
								cond: {
									$eq: ['$$item.correct', true],
								},
							},
						},
					},
					_id: false,
				},
			},
			{
				$group: {
					_id: '',
					count: { $sum: '$count' },
					countCorrect: { $sum: '$countCorrect' },
				},
			},
			{
				$project: {
					_id: false,
					pct: {
						$multiply: [
							{
								$divide: ['$countCorrect', '$count'],
							},
							100,
						],
					},
				},
			},
		]).then((pct: { pct: number }[]) =>
			pct.length ? Math.round(pct[0].pct) : 0
		)
	}

	/**
	 * This mapping enables to get a string version of the different ids
	 * @param {ISession} session
	 * @returns {ISession}
	 */
	mapData(session: ISession): ISession {
		return {
			...session,
			_id: session._id.toString(),
			answers: session.answers.map((answer: IAnswer) => ({
				...answer,
				question: {
					...answer.question,
					_id: answer.question._id.toString(),
				},
			})),
		}
	}
}
