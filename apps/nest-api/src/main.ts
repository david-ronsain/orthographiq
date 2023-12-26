/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'

import { AppModule } from './app/app.module'
import { config } from './app/config/config'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'
import { LoggerInterceptor } from './app/interceptors/logger.interceptor'
import { HttpExceptionFilter } from './app/filters/errors.filter'

async function bootstrap() {
	const app = await NestFactory.create(AppModule, {
		cors: true,
	})

	app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))

	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
		})
	)

	app.useGlobalInterceptors(
		new LoggerInterceptor(app.get(WINSTON_MODULE_NEST_PROVIDER))
	)

	app.useGlobalFilters(
		new HttpExceptionFilter(app.get(WINSTON_MODULE_NEST_PROVIDER))
	)

	await app.listen(config.port)
	Logger.log(
		`🚀 Application is running on: http://${config.host}:${config.port}`
	)
}

bootstrap()
