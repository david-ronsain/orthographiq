import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import {
	IAnswerDTO,
	ISessionDTO,
	QuestionDifficulty,
} from '@orthographiq/shared'
import mongoose from 'mongoose'

@Schema({
	_id: false,
	versionKey: false,
})
export class Answer implements IAnswerDTO {
	@Prop({
		type: Number,
		required: true,
	})
	answerGiven: number

	@Prop({
		type: Boolean,
		required: true,
	})
	correct: boolean

	@Prop({
		type: mongoose.Types.ObjectId,
		required: true,
	})
	questionId: mongoose.Types.ObjectId
}
export const AnswerSchema = SchemaFactory.createForClass(Answer)

@Schema({
	versionKey: false,
})
export class Session implements ISessionDTO {
	@Prop({
		type: mongoose.Types.ObjectId,
	})
	_id: mongoose.Types.ObjectId

	@Prop({
		type: mongoose.Types.UUID,
		required: true,
	})
	sessionId: string

	@Prop({
		type: String,
		enum: QuestionDifficulty,
		required: true,
	})
	level: QuestionDifficulty

	@Prop({
		type: [Answer],
		required: true,
	})
	answers: IAnswerDTO[]

	constructor(
		level: QuestionDifficulty,
		sessionId: string,
		answers: IAnswerDTO[]
	) {
		this._id = new mongoose.Types.ObjectId()
		this.level = level
		this.sessionId = sessionId
		this.answers = answers.map((answer: IAnswerDTO) => ({
			...answer,
			questionId: new mongoose.Types.ObjectId(answer.questionId),
		}))
	}
}
export const SessionSchema = SchemaFactory.createForClass(Session)
