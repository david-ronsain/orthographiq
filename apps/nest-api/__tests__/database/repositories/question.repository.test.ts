import { Test, TestingModule } from '@nestjs/testing'
import { getModelToken } from '@nestjs/mongoose'
import { QuestionRepository } from '../../../src/app/database/repositories/question.repository'
import { Question } from '../../../src/app/database/schemas/question.schema'
import { questionsData as mockQuestionsData } from '../../../src/app/database/data/questions'

// Mock the mongoose model
const mockModel = {
	find: jest.fn(),
	countDocuments: jest.fn(),
	deleteMany: jest.fn(),
	create: jest.fn(),
}

describe('QuestionRepository', () => {
	let questionRepository: QuestionRepository

	beforeEach(async () => {
		jest.clearAllMocks()
		const module: TestingModule = await Test.createTestingModule({
			providers: [
				QuestionRepository,
				{
					provide: getModelToken(Question.name),
					useValue: mockModel,
				},
			],
		}).compile()

		questionRepository = module.get<QuestionRepository>(QuestionRepository)
	})

	it('should be defined', () => {
		expect(questionRepository).toBeDefined()
	})

	describe('getAll', () => {
		it('should return an array of questions', async () => {
			// Mock the find method to return mock data
			mockModel.find.mockReturnValue(mockQuestionsData)

			const result = await questionRepository.getAll()

			expect(result).toEqual(mockQuestionsData)
		})
	})

	describe('getByIds', () => {
		it('should return an array of questions based on provided ids', async () => {
			const mockIds = ['id1', 'id2']

			// Mock the find method to return mock data
			mockModel.find.mockReturnValue(mockQuestionsData)

			const result = await questionRepository.getByIds(mockIds)

			expect(result).toEqual(mockQuestionsData)
			expect(mockModel.find).toHaveBeenCalledWith({
				_id: { $in: mockIds },
			})
		})
	})

	describe('loadData', () => {
		it('should load data if the count is less than the mock data length', async () => {
			const mockCount = 5

			// Mock the countDocuments method to return the count
			mockModel.countDocuments.mockResolvedValue(mockCount)

			// Mock the deleteMany and create methods
			mockModel.deleteMany.mockResolvedValue({})
			mockModel.create.mockResolvedValue(mockQuestionsData)

			await questionRepository.loadData()

			// Verify that deleteMany and create methods are called
			expect(mockModel.deleteMany).toHaveBeenCalled()
			expect(mockModel.create).toHaveBeenCalled()
		})

		it('should not load data if the count is greater than or equal to the mock data length', async () => {
			const mockCount = mockQuestionsData.length

			// Mock the countDocuments method to return the count
			mockModel.countDocuments.mockResolvedValue(mockCount)

			// Ensure that deleteMany and create methods are not called
			await questionRepository.loadData()

			expect(mockModel.deleteMany).not.toHaveBeenCalled()
			expect(mockModel.create).not.toHaveBeenCalled()
		})
	})
})
