/* eslint-disable @nx/enforce-module-boundaries */
import {
	IQuestion,
	IQuestionDTO,
	IResult,
	ISession,
	ISessionDTO,
	QuestionCategory,
	QuestionDifficulty,
} from '../../../../shared/src'
import { QuestionRepository } from '../../src/app/database/repositories/question.repository'
import { SessionRepository } from '../../src/app/database/repositories/session.repository'
import { QuestionService } from '../../src/app/services/question.service'
import { questionsData as questionsDTO } from '../../src/app/database/data/questions'
import mongoose from 'mongoose'
import { v4 } from 'uuid'
import { HttpException } from '@nestjs/common'

describe('Testing the questionService', () => {
	let service: QuestionService
	const mockQuestionRepo = {
		getAll: jest.fn(),
		getByIds: jest.fn(),
	} as unknown as QuestionRepository
	const mockSessionRepo = {
		save: jest.fn(),
		get: jest.fn(),
		getPctCorrectAnswersByCategoryAndDifficulty: jest.fn(),
	} as unknown as SessionRepository

	const questions: IQuestion[] = [...questionsDTO].map(
		(question: IQuestionDTO): IQuestion => ({
			...question,
			_id: new mongoose.Types.ObjectId(),
		})
	)

	beforeEach(() => {
		service = new QuestionService(mockQuestionRepo, mockSessionRepo)
	})

	it('should be a QuestionService instance', () => {
		expect(service).toBeInstanceOf(QuestionService)
	})

	describe('Test getAll', () => {
		it('Should return all questions', async () => {
			mockQuestionRepo.getAll = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve(questions))
			service = new QuestionService(mockQuestionRepo, mockSessionRepo)

			const questionsList = await service.getAll()
			expect(questionsList.length).toBe(questions.length)
		})
	})

	describe('Test saveResults', () => {
		it('should create the session', async () => {
			mockQuestionRepo.getByIds = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve(questions))
			const sessionId = v4()
			const expertQuestions = [
				...questions.filter(
					(question: IQuestion) =>
						question.difficulty === QuestionDifficulty.EXPERT
				),
			].slice(0, 2)
			const sessionDTO: ISessionDTO = {
				sessionId: sessionId,
				level: QuestionDifficulty.DEBUTANT,
				answers: [
					{
						questionId: expertQuestions.length
							? expertQuestions[0]._id
							: '',
						answerGiven: expertQuestions.length
							? expertQuestions[0].correctAnswer
							: 0,
						correct: true,
					},
					{
						questionId: expertQuestions.length
							? expertQuestions[1]._id
							: '',
						answerGiven: expertQuestions.length
							? expertQuestions[1].correctAnswer
							: 0,
						correct: true,
					},
				],
			}

			const session = await service.saveResults(sessionDTO)
			expect(session).toBeTruthy()
			expect(session.sessionId).toBe(sessionId)
			expect(session.level).toBe(QuestionDifficulty.EXPERT)
			expect(session.answers.length).toBe(sessionDTO.answers.length)
		})
	})

	describe('Test getResults', () => {
		it('should return a 404 error', async () => {
			mockSessionRepo.get = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve(undefined))
			expect(service.getResults(v4())).rejects.toThrow(HttpException)
		})

		it('should return the results', async () => {
			const expertQuestions: IQuestion[] = [
				...questions.filter(
					(question: IQuestion) =>
						question.difficulty === QuestionDifficulty.EXPERT &&
						question.category === QuestionCategory.CONJUGAISON
				),
			].slice(0, 2)
			const intermediateQuestion = questions.find(
				(question: IQuestion) =>
					question.difficulty === QuestionDifficulty.INTERMEDIAIRE &&
					question.category === QuestionCategory.CONJUGAISON
			) as unknown as IQuestion
			const beginnerQuestion: IQuestion = questions.find(
				(question: IQuestion) =>
					question.difficulty === QuestionDifficulty.DEBUTANT &&
					question.category === QuestionCategory.CONJUGAISON
			) as unknown as IQuestion
			const sessionId = v4()
			const _id = new mongoose.Types.ObjectId()
			const session: ISession = {
				_id,
				sessionId: sessionId,
				level: QuestionDifficulty.EXPERT,
				answers: [
					{
						question: expertQuestions[0],
						answerGiven: expertQuestions[0].correctAnswer,
						correct: true,
					},
					{
						question: expertQuestions[1],
						answerGiven: expertQuestions[1].correctAnswer,
						correct: true,
					},
					{
						question: intermediateQuestion,
						answerGiven: intermediateQuestion.correctAnswer,
						correct: true,
					},
					{
						question: beginnerQuestion,
						answerGiven: beginnerQuestion.correctAnswer,
						correct: true,
					},
				],
			}
			mockSessionRepo.get = jest
				.fn()
				.mockReturnValueOnce(Promise.resolve(session))
			mockSessionRepo.getPctCorrectAnswersByCategoryAndDifficulty = jest
				.fn()
				.mockReturnValue(100)

			const results: IResult = await service.getResults(sessionId)
			expect(results.session._id).toBe(_id)
			expect(results.session.level).toBe(QuestionDifficulty.EXPERT)
			expect(results.session.answers.length).toBe(session.answers.length)
			expect(results.pctConjugaisonGoodAnswers).toBe(100)
			expect(results.pctGrammaireGoodAnswers).toBe(0)
			expect(results.pctOrthographeGoodAnswers).toBe(0)
			expect(results.globalPctConjugaison).toBe(100)
			expect(results.globalPctGrammaire).toBe(100)
			expect(results.globalPctOrthographe).toBe(100)
		})
	})
})
