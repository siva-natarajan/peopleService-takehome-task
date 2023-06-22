import { ObjectSchema } from "@hapi/joi";
import { NextFunction, Response, Request } from "express";

export const validate = (schema: ObjectSchema<object>) => (request: Request, response: Response, next: NextFunction) => {
  const validationResult = schema.validate(request.body)
  if (validationResult.error) {
    response.status(422).send(validationResult.error?.details[0].message)
  } else {
    next()
  }
}