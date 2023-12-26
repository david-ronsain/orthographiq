import {
	IQuestion,
	IQuestionDTO,
	QuestionCategory,
	QuestionDifficulty,
} from '@orthographiq/shared'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose from 'mongoose'

@Schema({
	versionKey: false,
})
export class Question implements IQuestion {
	static fromDTO(dto: IQuestionDTO): Question {
		return {
			...dto,
			_id: new mongoose.Types.ObjectId(),
		} as Question
	}

	@Prop({
		type: mongoose.Types.ObjectId,
	})
	_id: mongoose.Types.ObjectId

	@Prop({
		type: String,
		required: true,
	})
	question: string

	@Prop({
		type: Number,
		required: true,
	})
	correctAnswer: number

	@Prop({
		type: String,
		enum: QuestionDifficulty,
		required: true,
	})
	difficulty: QuestionDifficulty

	@Prop({
		type: String,
		required: true,
	})
	explanation: string

	@Prop({
		type: [String],
		required: true,
	})
	options: string[]

	@Prop({
		type: String,
		enum: QuestionCategory,
		required: true,
	})
	category: QuestionCategory
}

export const QuestionSchema = SchemaFactory.createForClass(Question)
