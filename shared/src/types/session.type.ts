import mongoose, { Types } from 'mongoose'
import { IQuestion } from './question.type'
import { QuestionDifficulty } from '../enums/question.enum'

export type ISession = {
	_id: mongoose.Types.ObjectId | string
	sessionId: string
	level: QuestionDifficulty
	answers: IAnswer[]
}

export type ISessionDTO = {
	_id?: Types.ObjectId | string
	sessionId: string
	level: QuestionDifficulty
	answers: IAnswerDTO[]
}

export type IAnswer = {
	question: IQuestion
	answerGiven: number
	correct: boolean
}

export type IAnswerDTO = {
	questionId: Types.ObjectId | string
	answerGiven: number
	correct: boolean
}
