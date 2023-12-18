import { ISessionDTO, QuestionDifficulty } from '@orthographiq/shared'
import { Schema, model } from 'mongoose'

const sessionSchema = new Schema<ISessionDTO>(
	{
		_id: { type: Schema.Types.ObjectId },
		sessionId: { type: String, required: true },
		level: { type: String, enum: QuestionDifficulty, required: true },
		answers: {
			type: [
				{
					answerGiven: { type: Number, required: true },
					questionId: { type: Schema.Types.ObjectId, required: true },
					correct: { type: Boolean, required: true },
				},
			],
			required: true,
		},
	},
	{
		versionKey: false,
	}
)

export const Session = model<ISessionDTO>('Session', sessionSchema)
