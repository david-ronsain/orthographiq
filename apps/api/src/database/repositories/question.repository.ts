import { Question } from '../schemas/question.schema'
import { Types } from 'mongoose'
import { IQuestion } from '@orthographiq/shared'
import { injectable } from 'tsyringe'

@injectable()
export class QuestionRepository {
	async getAll(): Promise<IQuestion[]> {
		return (await Question.find().lean()).map(
			(question: IQuestion & { _id: Types.ObjectId }) => ({
				...question,
				_id: question._id.toString(),
			})
		)
	}

	async getByIds(ids: string[]): Promise<IQuestion[]> {
		return await Question.find({
			_id: { $in: ids },
		}).lean()
	}
}
