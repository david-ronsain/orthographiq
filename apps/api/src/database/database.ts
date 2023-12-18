import { Mongoose, Types, connect } from 'mongoose'
import { Question } from './schemas/question.schema'
import { questionsData } from './data/questions'
import { IQuestionDTO } from '@orthographiq/shared'
import { config } from '../config/config'

export class MongoDB {
	private static db: Promise<Mongoose>

	static async get(): Promise<Mongoose> {
		return MongoDB.db
	}

	/**
	 * Creates a unique mongo instance
	 */
	static init(): void {
		if (!MongoDB.db) {
			MongoDB.db = connect(
				`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
			).then(async (mongo: Mongoose) => {
				await MongoDB.loadData()
				return mongo
			})
		}
	}

	/**
	 * Creates the question in the DB
	 */
	private static async loadData(): Promise<void> {
		await Question.countDocuments()
			.exec()
			.then(async (count: number) => {
				if (count !== questionsData.length) {
					await Question.deleteMany()
					await Question.create(
						questionsData.map(
							(question: IQuestionDTO) =>
								new Question({
									...question,
									_id: new Types.ObjectId(),
								})
						)
					)
				}
			})
	}
}
