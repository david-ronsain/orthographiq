import 'reflect-metadata'
import { createExpressServer, useContainer } from 'routing-controllers'
import { QuestionController } from './controllers/question.controller'
import { MongoDB } from './database/database'
import { config } from './config/config'
import { container } from 'tsyringe'
import { QuestionService } from './services/question.service'
import TsyringeAdapter from './adapter'
import { QuestionRepository } from './database/repositories/question.repository'
import { SessionRepository } from './database/repositories/session.repository'
import { LogInterceptor } from './interceptors/log.interceptor'
import { HttpErrorHandler } from './middlewares/error.middleware'

container.register('QuestionRepository', QuestionRepository)
container.register('SessionRepository', SessionRepository)
container.register('QuestionService', QuestionService)

useContainer(new TsyringeAdapter(container))

const app = createExpressServer({
	controllers: [QuestionController],
	cors: {
		origin: '*',
	},
	middlewares: [HttpErrorHandler],
	defaultErrorHandler: false,
	interceptors: [LogInterceptor],
	classTransformer: true,
	validation: true
})

MongoDB.init()

app.listen(config.port, config.host, () => {
	console.log(`[ ready ] http://${config.host}:${config.port}`)
})
