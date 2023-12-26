import { createLogger, format, transports } from 'winston'

export const logger = createLogger({
  level: 'info',
  format: format.json(),
  defaultMeta: {
    service: 'api'
  },
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'error.log', level: 'error', dirname: 'apps/api/logs/'}),
    new transports.File({ filename: 'info.log', level: 'info', dirname: 'apps/api/logs/'}),
    new transports.File({ filename: 'warning.log', level: 'warning', dirname: 'apps/api/logs/'}),
  ]
});