import { Question } from '../schemas/question.schema'
import { IQuestion, IQuestionDTO } from '@orthographiq/shared'
import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { questionsData } from '../data/questions'

@Injectable()
export class QuestionRepository {
	constructor(@InjectModel(Question.name) private model: Model<Question>) {}

	async getAll(): Promise<IQuestion[]> {
		return this.model.find()
	}

	async getByIds(ids: string[]): Promise<IQuestion[]> {
		return this.model.find({ _id: { $in: ids } })
	}

	async loadData(): Promise<void> {
		await this.model
			.countDocuments()
			.then(async (count: number) => {
				if (count < questionsData.length) {
					await this.model.deleteMany()
					await this.model.create(
						questionsData.map((question: IQuestionDTO) =>
							Question.fromDTO(question)
						)
					)
				}
			})
			.catch(() => 0)
	}
}
