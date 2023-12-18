import {
	IQuestion,
	QuestionCategory,
	QuestionDifficulty,
} from '@orthographiq/shared'
import { Schema, model } from 'mongoose'

const questionSchema = new Schema<IQuestion>(
	{
		_id: { type: Schema.Types.ObjectId },
		question: { type: String, required: true },
		correctAnswer: { type: Number, required: true },
		difficulty: { type: String, enum: QuestionDifficulty, required: true },
		explanation: { type: String, required: true },
		options: { type: [String], required: true },
		category: { type: String, enum: QuestionCategory, required: true },
	},
	{
		versionKey: false,
	}
)

export const Question = model<IQuestion>('Question', questionSchema)
