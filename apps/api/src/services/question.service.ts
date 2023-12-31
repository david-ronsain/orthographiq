import { QuestionRepository } from '../database/repositories/question.repository'
import {
	IAnswerDTO,
	IQuestion,
	IResult,
	ISessionDTO,
	QuestionCategory,
} from '@orthographiq/shared'
import { Session } from '../database/schemas/session.schema'
import { SessionRepository } from '../database/repositories/session.repository'
import { Types } from 'mongoose'
import { formatResults, getLevel } from '../helpers/session.helper'
import { inject, injectable } from 'tsyringe'
import { HttpError } from 'routing-controllers'

@injectable()
export class QuestionService {
	constructor(
		@inject('QuestionRepository')
		private questionRepository: QuestionRepository,
		@inject('SessionRepository')
		private sessionRepository: SessionRepository
	) {}

	/**
	 * Returns the complete list of questions
	 * @returns {Promise<IQuestion[]>} list of questions
	 */
	async getAll(): Promise<IQuestion[]> {
		return this.questionRepository.getAll()
	}

	/**
	 * Saves the user session
	 * @param {ISessionDTO} sessionDTO Informations about the test
	 * @returns {ISessionDTO}
	 */
	async saveResults(sessionDTO: ISessionDTO): Promise<ISessionDTO> {
		const session = new Session(sessionDTO)
		session._id = new Types.ObjectId()

		const questions = await this.questionRepository.getByIds(
			session.answers.map((answer: IAnswerDTO) =>
				answer.questionId.toString()
			)
		)

		session.level = getLevel(questions, session)

		this.sessionRepository.save(session)

		return {
			...sessionDTO,
			level: session.level,
		}
	}

	/**
	 * Returns the results for a given session
	 * @param {string} sessionId The id of the session
	 * @returns {IResult} The results
	 */
	async getResults(sessionId: string): Promise<IResult> {
		try {
			const session = await this.sessionRepository.get(sessionId)

			const {
				pctConjugaisonGoodAnswers,
				pctGrammaireGoodAnswers,
				pctOrthographeGoodAnswers,
			} = formatResults(session)

			const getGlobalPct = async (category: QuestionCategory) =>
				await this.sessionRepository.getPctCorrectAnswersByCategoryAndDifficulty(
					session.level,
					category
				)

			const [
				globalPctConjugaison,
				globalPctOrthographe,
				globalPctGrammaire,
			] = await Promise.all([
				getGlobalPct(QuestionCategory.CONJUGAISON),
				getGlobalPct(QuestionCategory.ORTHOGRAPHE),
				getGlobalPct(QuestionCategory.GRAMMAIRE),
			])

			return {
				session: session,
				pctConjugaisonGoodAnswers,
				pctGrammaireGoodAnswers,
				pctOrthographeGoodAnswers,
				globalPctConjugaison,
				globalPctOrthographe,
				globalPctGrammaire,
			}
		} catch (error: unknown) {
			throw new HttpError(404, 'Results not found')
		}
	}
}
