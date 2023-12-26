import mongoose from "mongoose"
import { IQuestion, IQuestionDTO, ISession, ISessionDTO, QuestionCategory, QuestionDifficulty } from "../../../../../shared/src"
import { questionsData as questionsDTO } from '../../../src/database/data/questions'
import { Question } from "../../../src/database/schemas/question.schema"
import { MongoDB } from "../../../src/database/database"
import { QuestionRepository } from "../../../src/database/repositories/question.repository"
import { SessionRepository } from "../../../src/database/repositories/session.repository"
import { v4 } from "uuid"
import { Session } from "../../../src/database/schemas/session.schema"

describe('Testing the sessionRepository', () => {
    const questions: IQuestion[] = [...questionsDTO].map((question: IQuestionDTO): IQuestion => ({
        ...question,
        _id: new mongoose.Types.ObjectId()
    }))
    let questionRepo: QuestionRepository
    let repo: SessionRepository
    let questionsInDb: IQuestion[]

    beforeAll(() => {
        MongoDB.init()
        questionRepo = new QuestionRepository()
        repo = new SessionRepository()
        
    })

    beforeEach(async () => {
        await (Question.create(questions.map((question: IQuestionDTO) => new Question(question))))
        questionsInDb = await questionRepo.getAll()
    })

    afterAll(async () => {
        await MongoDB.disconnect()
    })

    afterEach(async () => {
        await Session.deleteMany()
        await Question.deleteMany()
    })

    describe('Testing the save method', () => {
        it('should create a session', async () => {
            expect((await Session.find()).length).toBe(0)

            const sessionId = v4()
            const session: ISessionDTO = {
                _id: new mongoose.Types.ObjectId(),
                sessionId: sessionId,
                level: questionsInDb[0].difficulty,
                answers: [
                    {
                        questionId: questionsInDb[0]._id.toString(),
                        answerGiven: questionsInDb[0].correctAnswer,
                        correct: true
                    }
                ]
            }
            await repo.save(session)

            const sessionCreated = await Session.findOne({sessionId: {$eq: sessionId}});
            expect(sessionCreated).toBeTruthy()
            expect(sessionCreated.sessionId).toBe(sessionId)
        })
    })

    describe('Testing the get method', () => {
        it('should return a session', async () => {
            const sessions = await Session.find()
            expect(sessions.length).toBe(0)

            const sessionId = v4()
            const session: ISessionDTO = {
                _id: new mongoose.Types.ObjectId(),
                sessionId: sessionId,
                level: questionsInDb[0].difficulty,
                answers: [
                    {
                        questionId: questionsInDb[0]._id.toString(),
                        answerGiven: questionsInDb[0].correctAnswer,
                        correct: true
                    }
                ]
            }
            await Session.create(session)

            const sessionCreated: ISession = await repo.get(sessionId.toString());
            expect(sessionCreated).toBeTruthy()
            expect(sessionCreated.sessionId).toBe(sessionId)
        })
    })

    describe('Testing the getPctCorrectAnswersByCategoryAndDifficulty method', () => {
        it('should return the pct', async () => {
            const sessions = await Session.find()
            expect(sessions.length).toBe(0)

            const questionsToTest = {
                [QuestionCategory.CONJUGAISON]: {
                    [QuestionDifficulty.DEBUTANT]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.CONJUGAISON && question.difficulty === QuestionDifficulty.DEBUTANT),
                    [QuestionDifficulty.INTERMEDIAIRE]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.CONJUGAISON && question.difficulty === QuestionDifficulty.INTERMEDIAIRE),
                    [QuestionDifficulty.EXPERT]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.CONJUGAISON && question.difficulty === QuestionDifficulty.EXPERT)
                },
                [QuestionCategory.ORTHOGRAPHE]: {
                    [QuestionDifficulty.DEBUTANT]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.ORTHOGRAPHE && question.difficulty === QuestionDifficulty.DEBUTANT),
                    [QuestionDifficulty.INTERMEDIAIRE]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.ORTHOGRAPHE && question.difficulty === QuestionDifficulty.INTERMEDIAIRE),
                    [QuestionDifficulty.EXPERT]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.ORTHOGRAPHE && question.difficulty === QuestionDifficulty.EXPERT)
                },
                [QuestionCategory.GRAMMAIRE]: {
                    [QuestionDifficulty.DEBUTANT]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.GRAMMAIRE && question.difficulty === QuestionDifficulty.DEBUTANT),
                    [QuestionDifficulty.INTERMEDIAIRE]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.GRAMMAIRE && question.difficulty === QuestionDifficulty.INTERMEDIAIRE),
                    [QuestionDifficulty.EXPERT]: questionsInDb.find((question: IQuestion) => question.category === QuestionCategory.GRAMMAIRE && question.difficulty === QuestionDifficulty.EXPERT)
                }
            }
            
            const sessionId = v4()
            const session: ISessionDTO = {
                _id: new mongoose.Types.ObjectId(),
                sessionId: sessionId,
                level: questionsInDb[0].difficulty,
                answers: [
                    {
                        questionId: questionsToTest[QuestionCategory.CONJUGAISON][QuestionDifficulty.EXPERT]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.CONJUGAISON][QuestionDifficulty.EXPERT]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.GRAMMAIRE][QuestionDifficulty.EXPERT]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.GRAMMAIRE][QuestionDifficulty.EXPERT]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.ORTHOGRAPHE][QuestionDifficulty.EXPERT]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.ORTHOGRAPHE][QuestionDifficulty.EXPERT]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.CONJUGAISON][QuestionDifficulty.INTERMEDIAIRE]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.CONJUGAISON][QuestionDifficulty.INTERMEDIAIRE]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.GRAMMAIRE][QuestionDifficulty.INTERMEDIAIRE]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.GRAMMAIRE][QuestionDifficulty.INTERMEDIAIRE]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.ORTHOGRAPHE][QuestionDifficulty.INTERMEDIAIRE]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.ORTHOGRAPHE][QuestionDifficulty.INTERMEDIAIRE]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.CONJUGAISON][QuestionDifficulty.DEBUTANT]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.CONJUGAISON][QuestionDifficulty.DEBUTANT]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.GRAMMAIRE][QuestionDifficulty.DEBUTANT]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.GRAMMAIRE][QuestionDifficulty.DEBUTANT]?.correctAnswer || 0,
                        correct: true
                    },
                    {
                        questionId: questionsToTest[QuestionCategory.ORTHOGRAPHE][QuestionDifficulty.DEBUTANT]?._id?.toString() || '',
                        answerGiven: questionsToTest[QuestionCategory.ORTHOGRAPHE][QuestionDifficulty.DEBUTANT]?.correctAnswer || 0,
                        correct: true
                    }
                ]
            }
            await Session.create(session)

            let pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.EXPERT, QuestionCategory.CONJUGAISON)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.EXPERT, QuestionCategory.ORTHOGRAPHE)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.EXPERT, QuestionCategory.GRAMMAIRE)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.INTERMEDIAIRE, QuestionCategory.CONJUGAISON)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.INTERMEDIAIRE, QuestionCategory.ORTHOGRAPHE)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.INTERMEDIAIRE, QuestionCategory.GRAMMAIRE)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.DEBUTANT, QuestionCategory.CONJUGAISON)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.DEBUTANT, QuestionCategory.ORTHOGRAPHE)
            expect(pct).toBe(100)
            pct = await repo.getPctCorrectAnswersByCategoryAndDifficulty(QuestionDifficulty.DEBUTANT, QuestionCategory.GRAMMAIRE)
            expect(pct).toBe(100)
        })
    })
})