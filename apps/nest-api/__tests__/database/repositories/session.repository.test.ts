/* eslint-disable @nx/enforce-module-boundaries */
import { Test, TestingModule } from '@nestjs/testing'
import { getModelToken } from '@nestjs/mongoose'
import {
	IQuestion,
	ISession,
	ISessionDTO,
	QuestionCategory,
	QuestionDifficulty,
} from '../../../../../shared/src'
import { SessionRepository } from '../../../src/app/database/repositories/session.repository'
import mongoose from 'mongoose'
import { v4 } from 'uuid'
import { questionsData } from '../../../src/app/database/data/questions'
import { Session } from '../../../src/app/database/schemas/session.schema'

// Mock data for testing
const mockSessionData: ISessionDTO = {
	_id: new mongoose.Types.ObjectId(),
	sessionId: v4(),
	level: QuestionDifficulty.EXPERT,
	answers: questionsData.map((question: IQuestion) => ({
		questionId: new mongoose.Types.ObjectId(),
		correct: true,
		answerGiven: question.correctAnswer,
	})),
}

// Mock the Mongoose model
const mockModel = {
	create: jest.fn(),
	aggregate: jest.fn(),
}

describe('SessionRepository', () => {
	let sessionRepository: SessionRepository

	beforeAll(() => {})

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				SessionRepository,
				{
					provide: getModelToken(Session.name),
					useValue: mockModel,
				},
			],
		}).compile()

		sessionRepository = module.get<SessionRepository>(SessionRepository)
	})

	it('should be defined', () => {
		expect(sessionRepository).toBeDefined()
	})

	describe('save', () => {
		it('should save a session', async () => {
			// Mock the create method to resolve
			mockModel.create.mockResolvedValueOnce(
				new Session(
					mockSessionData.level,
					mockSessionData.sessionId,
					mockSessionData.answers
				)
			)

			// Call the save method
			await sessionRepository.save(mockSessionData)

			// Expectations
			expect(mockModel.create).toHaveBeenCalledWith(mockSessionData)
		})
	})

	describe('get', () => {
		it('should get a complete session data', async () => {
			// Mock the aggregate method to resolve with mock data
			mockModel.aggregate.mockResolvedValueOnce([mockSessionData])

			// Call the get method
			const result: ISession = await sessionRepository.get('sessionId')

			// Expectations
			expect(mockModel.aggregate).toHaveBeenCalled()
			expect(result.sessionId).toEqual(mockSessionData.sessionId)
		})
	})

	describe('getPctCorrectAnswersByCategoryAndDifficulty', () => {
		it('should return the overall percentage of good answers', async () => {
			// Mock the aggregate method to resolve with mock data
			const mockPct = 75
			mockModel.aggregate.mockResolvedValueOnce([{ pct: mockPct }])

			// Call the method
			const result =
				await sessionRepository.getPctCorrectAnswersByCategoryAndDifficulty(
					QuestionDifficulty.EXPERT,
					QuestionCategory.CONJUGAISON
				)

			// Expectations
			expect(mockModel.aggregate).toHaveBeenCalled()
			expect(result).toEqual(mockPct)
		})
	})
})
