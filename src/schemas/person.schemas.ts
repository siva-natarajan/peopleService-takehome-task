import Joi from "@hapi/joi";

export const personSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  age: Joi.number().required(),
  occupation: Joi.string().required()
})