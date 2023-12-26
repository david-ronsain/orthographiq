import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { WinstonModule } from 'nest-winston'
import * as winston from 'winston'
import { config } from './config/config'
import { QuestionModule } from './question.module'

@Module({
	imports: [
		MongooseModule.forRoot(
			`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`
		),
		QuestionModule,
		WinstonModule.forRoot({
			level: 'info',
			format: winston.format.json(),
			defaultMeta: {
				service: 'api',
			},
			handleExceptions: true,
			handleRejections: true,
			transports: [
				new winston.transports.Console({
					handleExceptions: true,
					handleRejections: true,
				}),
				new winston.transports.File({
					filename: 'error.log',
					level: 'error',
					dirname: 'apps/nest-api/logs/',
					handleExceptions: true,
					handleRejections: true,
				}),
				new winston.transports.File({
					filename: 'info.log',
					level: 'info',
					dirname: 'apps/nest-api/logs/',
				}),
				new winston.transports.File({
					filename: 'warning.log',
					level: 'warning',
					dirname: 'apps/net-api/logs/',
				}),
			],
		}),
	],
})
export class AppModule {}
