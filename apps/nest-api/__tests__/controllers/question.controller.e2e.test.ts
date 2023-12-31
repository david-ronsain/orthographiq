/* eslint-disable @nx/enforce-module-boundaries */
import { Test, TestingModule } from '@nestjs/testing'
import { HttpStatus, INestApplication } from '@nestjs/common'
import supertest from 'supertest'
import { QuestionService } from '../../src/app/services/question.service'
import { QuestionController } from '../../src/app/controllers/question.controller'
import {
	IAnswerDTO,
	IQuestion,
	IQuestionDTO,
	IResult,
	ISessionDTO,
	QuestionDifficulty,
} from '../../../../shared/src'
import { questionsData } from '../../src/app/database/data/questions'
import { Question } from '../../src/app/database/schemas/question.schema'
import { QuestionRepository } from '../../src/app/database/repositories/question.repository'
import { SessionRepository } from '../../src/app/database/repositories/session.repository'
import { getModelToken } from '@nestjs/mongoose'
import { Session } from '../../src/app/database/schemas/session.schema'
import { config } from '../../src/app/config/config'
import mongoose from 'mongoose'
import { v4 } from 'uuid'

const mockQuestionModel = {
	find: jest.fn(),
	countDocuments: jest.fn(),
	deleteMany: jest.fn(),
	create: jest.fn(),
}
const mockSessionModel = {
	create: jest.fn(),
	aggregate: jest.fn(),
	countDocuments: jest.fn(),
}

describe('QuestionController (e2e)', () => {
	let app: INestApplication
	let questionService: QuestionService

	beforeAll(async () => {
		const module: TestingModule = await Test.createTestingModule({
			controllers: [QuestionController],
			providers: [
				QuestionService,
				QuestionRepository,
				SessionRepository,
				{
					provide: getModelToken(Question.name),
					useValue: mockQuestionModel,
				},
				{
					provide: getModelToken(Session.name),
					useValue: mockSessionModel,
				},
			],
		}).compile()
		mockQuestionModel.countDocuments.mockRejectedValue(0)

		app = module.createNestApplication()
		await app.init()

		questionService = module.get<QuestionService>(QuestionService)
	})

	afterAll(async () => {
		await app.close()
	})

	beforeEach(async () => {
		jest.resetAllMocks()
		await mongoose.connect(
			`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
		)
	})

	afterEach(async () => {
		await mongoose.connection.close()
	})

	it('should return an array of questions on GET /', async () => {
		const questions: IQuestion[] = questionsData.map(
			(question: IQuestionDTO) => Question.fromDTO(question)
		)
		jest.spyOn(questionService, 'getAll').mockResolvedValue(questions)

		const response = await supertest(app.getHttpServer())
			.get('/')
			.expect(HttpStatus.OK)

		expect(response.body).toEqual(
			questions.map((question: IQuestion) => ({
				...question,
				_id: expect.anything(),
			}))
		)
	})

	it('should save results on POST /', async () => {
		const session: ISessionDTO = {
			_id: new mongoose.Types.ObjectId(),
			level: QuestionDifficulty.EXPERT,
			sessionId: v4(),
			answers: questionsData.map((question: IQuestionDTO) => ({
				questionId: new mongoose.Types.ObjectId(),
				correct: true,
				answerGiven: question.correctAnswer,
			})),
		}
		jest.spyOn(questionService, 'saveResults').mockResolvedValue(session)

		const response = await supertest(app.getHttpServer())
			.post('/')
			.send(session)
			.expect(HttpStatus.CREATED)

		expect(response.body).toEqual({
			_id: expect.anything(),
			level: QuestionDifficulty.EXPERT,
			sessionId: session.sessionId,
			answers: session.answers.map((answer: IAnswerDTO) => ({
				...answer,
				questionId: expect.anything(),
			})),
		})
	})

	it('should return results on GET /results/:sessionId', async () => {
		const sessionId = v4()
		const results: IResult = {
			globalPctConjugaison: expect.anything(),
			globalPctGrammaire: expect.anything(),
			globalPctOrthographe: expect.anything(),
			pctConjugaisonGoodAnswers: expect.anything(),
			pctGrammaireGoodAnswers: expect.anything(),
			pctOrthographeGoodAnswers: expect.anything(),
			session: {
				_id: expect.anything(),
				level: expect.anything(),
				answers: expect.anything(),
				sessionId: sessionId,
			},
		}
		jest.spyOn(questionService, 'getResults').mockResolvedValue(results)

		const response = await supertest(app.getHttpServer())
			.get(`/results/${sessionId}`)
			.expect(HttpStatus.OK)

		expect(response.body).toEqual(results)
	})
})
