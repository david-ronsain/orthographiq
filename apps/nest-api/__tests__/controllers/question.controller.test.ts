/* eslint-disable @nx/enforce-module-boundaries */
import 'reflect-metadata'
import { QuestionController } from '../../src/app/controllers/question.controller'
import { QuestionService } from '../../src/app/services/question.service'
import { questionsData as questionsDTO } from '../../src/app/database/data/questions'
import mongoose from 'mongoose'
import { v4 } from 'uuid'
import { ValidationError, validateSync } from 'class-validator'
import { plainToInstance } from 'class-transformer'
import {
	IQuestion,
	IQuestionDTO,
	IResult,
	QuestionDifficulty,
	SaveResultsValidationSchema,
} from '../../../../shared/src'

describe('Testing the questionController', () => {
	let controller: QuestionController
	const mockService = {
		getAll: jest.fn(),
		saveResults: jest.fn(),
		getResults: jest.fn(),
	} as unknown as QuestionService

	const questions: IQuestion[] = [...questionsDTO].map(
		(question: IQuestionDTO): IQuestion => ({
			...question,
			_id: new mongoose.Types.ObjectId(),
		})
	)

	beforeEach(() => {
		controller = new QuestionController(mockService)
	})

	it('should be a QuestionController instance', () => {
		expect(controller).toBeInstanceOf(QuestionController)
	})

	describe('getAll', () => {
		it('should return all questions', async () => {
			mockService.getAll = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve(questions))
			controller = new QuestionController(mockService)
			const questionsList: IQuestion[] = await controller.getAll()

			expect(questionsList.length).toBe(questionsDTO.length)
			expect(questionsList[0]).toMatchObject(questionsDTO[0])
		})

		it('should return an empty list', async () => {
			mockService.getAll = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve([]))
			controller = new QuestionController(mockService)
			const questionsList: IQuestion[] = await controller.getAll()

			expect(questionsList.length).toBe(0)
		})
	})

	describe('saveResults', () => {
		it('should fail', async () => {
			const dto = plainToInstance(SaveResultsValidationSchema, {})
			expect(validateSync(dto)).toBeInstanceOf(Array<ValidationError>)
		})

		it('should return the session', async () => {
			const session = {
				sessionId: v4(),
				level: QuestionDifficulty.DEBUTANT,
				answers: [
					{
						questionId: questions[0]._id,
						answerGiven: questions[0].correctAnswer,
						correct: true,
					},
				],
			}
			mockService.saveResults = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve(session))
			controller = new QuestionController(mockService)
			const response = await controller.saveResults(
				session as SaveResultsValidationSchema
			)
			expect(response).toMatchObject(session)
		})
	})

	describe('getResults', () => {
		it('should return the results', async () => {
			const sessionId = v4()
			const results: IResult = {
				globalPctConjugaison: 80,
				globalPctGrammaire: 70,
				globalPctOrthographe: 90,
				pctConjugaisonGoodAnswers: 81,
				pctGrammaireGoodAnswers: 65,
				pctOrthographeGoodAnswers: 95,
				session: {
					_id: '',
					sessionId: sessionId,
					level: QuestionDifficulty.DEBUTANT,
					answers: [
						{
							question: questions[0],
							answerGiven: questions[0].correctAnswer,
							correct: true,
						},
					],
				},
			}
			mockService.getResults = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve(results))
			controller = new QuestionController(mockService)
			const response = await controller.getResults(sessionId)
			expect(response).toBeTruthy()
			expect(response.session.sessionId).toBe(sessionId)
			expect(response.globalPctConjugaison).toBe(
				results.globalPctConjugaison
			)
		})
	})
})
