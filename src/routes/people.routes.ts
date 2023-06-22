import { Router, Request, Response } from "express";
import PeopleRepository from "../repositories/people.repository";
import { validate } from "../middlewares/validation.middleware";
import { personSchema } from "../schemas/person.schemas";

const peopleRouter = Router()


peopleRouter.get('/', (request: Request, response: Response) => {
  const instance = PeopleRepository.getInstance()
  response.status(200).send(instance.getPeople())
})

peopleRouter.post('/', validate(personSchema), (request: Request, response: Response) => {
  try {
    const instance = PeopleRepository.getInstance()
    instance.createPeople(request.body)
    response.status(201).send(request.body)
  } catch (error) {
    response.status(500).send({ "message": "Adding new person failed" })
  }
})

export default peopleRouter