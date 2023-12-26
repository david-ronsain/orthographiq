import mongoose from "mongoose"
import { IQuestion, IQuestionDTO } from "../../../../../shared/src"
import { questionsData as questionsDTO } from '../../../src/database/data/questions'
import { Question } from "../../../src/database/schemas/question.schema"
import { MongoDB } from "../../../src/database/database"
import { QuestionRepository } from "../../../src/database/repositories/question.repository"

describe('Testing the questionRepository', () => {
    const questions: IQuestion[] = [...questionsDTO].map((question: IQuestionDTO): IQuestion => ({
        ...question,
        _id: new mongoose.Types.ObjectId()
    }))
    let repo: QuestionRepository

    beforeAll(async () => {
        MongoDB.init()
        repo = new QuestionRepository()
        const questionsEntities: IQuestion[] = questions.map((question: IQuestion): IQuestion => new Question(question))
        await (Question.create(questionsEntities))
    })

    afterAll(async () => {
        await Question.deleteMany()
        await MongoDB.disconnect()
    })

    describe('Testing the getAll method', () => {
        it('should return all questions', async () => {
            const list = await repo.getAll()
            list.forEach((question: IQuestion) => {
                expect(questions.findIndex((q: IQuestion) => q.question === question.question)).not.toBe(-1)
            })
        })
    })

    describe('Testing the getByIds method', () => {
        it('should return an empty array', async () => {
            const list = await repo.getByIds([new mongoose.Types.ObjectId().toString(), new mongoose.Types.ObjectId().toString()])
            expect(list.length).toBe(0)
        })

        it('should return two questions', async () => {
            const questionsIds: string[] = (await repo.getAll()).splice(0, 2).map((question: IQuestion) => question._id.toString())
            const list = await repo.getByIds(questionsIds)
            expect(list.length).toBe(2)
        })
    })
})