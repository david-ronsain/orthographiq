import { Action, Interceptor, InterceptorInterface } from "routing-controllers";
import { logger } from '../loggers/winston.logger'

@Interceptor()
export class LogInterceptor implements InterceptorInterface {
    intercept(action: Action, result: unknown) {
        logger.info(`${action.request?.statusCode} ${action.request?.method} ${action.request?.url} - ###{body: ${JSON.stringify(action.request?.body)}} ###{params: ${JSON.stringify(action.request?.params)}} ###{query: ${JSON.stringify(action.request?.query)}}`)
        return result
    }
    
}