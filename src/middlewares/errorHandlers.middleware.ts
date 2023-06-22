import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'

export const globalErrorHandler: ErrorRequestHandler = (error, request: Request, response: Response, next: NextFunction) => {
  if (!error) {
    return next()
  }
  console.log(error.stack)
  response.status(500).send({ code: '1.1', message: 'Unhandled/Unknown error' })
}

export const fallbackHandler: ErrorRequestHandler = (error, request: Request, response: Response, next: NextFunction) => {
  response.status(404).send({
    code: '1.2', message: "path not supported"
  })
}