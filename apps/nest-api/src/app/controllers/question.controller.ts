import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common'

import { QuestionService } from '../services/question.service'
import {
	IQuestion,
	IResult,
	ISessionDTO,
	SaveResultsValidationSchema,
} from '@orthographiq/shared'

@Controller()
export class QuestionController {
	constructor(private readonly questionService: QuestionService) {}

	@Get('/')
	@HttpCode(200)
	async getAll(): Promise<Array<IQuestion>> {
		return this.questionService.getAll()
	}

	@Post('/')
	@HttpCode(201)
	async saveResults(
		@Body() session: SaveResultsValidationSchema
	): Promise<ISessionDTO> {
		return this.questionService.saveResults(session)
	}

	@Get(
		'/results/:sessionId([a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12})'
	)
	@HttpCode(200)
	async getResults(@Param('sessionId') sessionId: string): Promise<IResult> {
		return this.questionService.getResults(sessionId)
	}
}
