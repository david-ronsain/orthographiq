/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware, ExpressErrorMiddlewareInterface, HttpError } from 'routing-controllers';
import { logger } from '../loggers/winston.logger';

@Middleware({ type: 'after' })
export class HttpErrorHandler implements ExpressErrorMiddlewareInterface {
    error(error: any, request: Request, response: any, next: (err: any) => any) {
        logger.error(`${request.method} ${request.url} - ###{body: ${JSON.stringify(request.body)}} - ###{response: ${error.message}} - ###{errors: ${JSON.stringify(error?.errors)}}`)
        if (error instanceof HttpError) {
            response.status(error.httpCode).json(error);
        }
        next(error);
    }
}