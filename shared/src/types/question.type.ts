import { Schema } from 'mongoose'
import { QuestionCategory, QuestionDifficulty } from '../enums/question.enum'

export type IQuestion = {
	_id: Schema.Types.UUID | string
	question: string
	options: string[]
	correctAnswer: number
	difficulty: QuestionDifficulty
	explanation: string
	category: QuestionCategory
}

export type IQuestionDTO = Omit<IQuestion, '_id'>
