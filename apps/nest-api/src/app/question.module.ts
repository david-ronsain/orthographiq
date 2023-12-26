import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { QuestionController } from './controllers/question.controller'
import { QuestionService } from './services/question.service'
import { QuestionRepository } from './database/repositories/question.repository'
import { SessionRepository } from './database/repositories/session.repository'
import { QuestionSchema } from './database/schemas/question.schema'
import { SessionSchema } from './database/schemas/session.schema'

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: 'Question', schema: QuestionSchema },
			{ name: 'Session', schema: SessionSchema },
		]),
	],
	controllers: [QuestionController],
	providers: [QuestionRepository, SessionRepository, QuestionService],
})
export class QuestionModule {}
