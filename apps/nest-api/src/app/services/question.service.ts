import {
	HttpException,
	HttpStatus,
	Injectable,
	OnModuleInit,
} from '@nestjs/common'
import { Session } from '../database/schemas/session.schema'
import {
	IAnswerDTO,
	IQuestion,
	IResult,
	ISessionDTO,
	QuestionCategory,
} from '@orthographiq/shared'
import { formatResults, getLevel } from '../helpers/session.helper'
import { QuestionRepository } from '../database/repositories/question.repository'
import { SessionRepository } from '../database/repositories/session.repository'

@Injectable()
export class QuestionService implements OnModuleInit {
	constructor(
		private questionRepository: QuestionRepository,
		private sessionRepository: SessionRepository
	) {}

	onModuleInit() {
		this.questionRepository.loadData()
	}

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
		const questions = await this.questionRepository.getByIds(
			sessionDTO.answers.map((answer: IAnswerDTO) =>
				answer.questionId.toString()
			)
		)
		const session = new Session(
			getLevel(questions, sessionDTO),
			sessionDTO.sessionId,
			sessionDTO.answers
		)

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
			throw new HttpException('Results not found', HttpStatus.NOT_FOUND)
		}
	}
}
