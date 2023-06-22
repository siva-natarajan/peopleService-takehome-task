import { Router, Request, Response } from "express";
import PeopleRepository from "../repositories/people.repository";
import { validate } from "../middlewares/validation.middleware";
import { personSchema } from "../schemas/person.schemas";
import PeopleService from "../services/people.services";

const peopleRouter = Router()

peopleRouter.get('/', (request: Request, response: Response) => {
  const repoInstance = PeopleRepository.getInstance()
  const peopleService = new PeopleService(repoInstance)
  response.status(200).send(peopleService.getPeopleList())
})

peopleRouter.get('/:id', (request: Request, response: Response) => {
  try {
    const paramsId = request.params.id
    const repoInstance = PeopleRepository.getInstance()
    const peopleService = new PeopleService(repoInstance)
    const getById = peopleService.getPersonById(paramsId)
    response.status(200).json(getById)
  } catch (error) {
    response.status(500).send({ "message": `Getting person by ID failed with message ${error}` })
  }
})

peopleRouter.delete('/:id', (request: Request, response: Response) => {
  try {
    const paramsId = request.params.id
    const repoInstance = PeopleRepository.getInstance()
    const peopleService = new PeopleService(repoInstance)
    const getById = peopleService.removePeople(paramsId)
    response.status(200).json({ "message": `succesfully removed ${getById} entry` })
  } catch (error) {
    response.status(500).send({ "message": `Deleting person failed with error ${error}` })
  }
})

peopleRouter.post('/', validate(personSchema), (request: Request, response: Response) => {
  try {
    const repoInstance = PeopleRepository.getInstance()
    const peopleService = new PeopleService(repoInstance)
    peopleService.addPeople(request.body)
    response.status(201).send(request.body)
  } catch (error) {
    response.status(500).send({ "message": "Adding new person failed" })
  }
})

export default peopleRouter