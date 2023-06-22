
export default class PeopleService {
  constructor(private peopleRepository: any) {
  }

  getPeopleList() {
    return this.peopleRepository.getPeople()
  }

  validateRequestedPersonEntry(personId: string) {
    if (isNaN(personId as any)) {
      throw new Error('Invalid id provided')
    }
    const personDetails = this.getPeopleList()
    const requiredPerson = personDetails.filter((person: any) => person.id == personId)
    if (requiredPerson.length == 0) {
      throw new Error(`id does not exist`)
    }
  }


  getPersonById(personId: string) {
    this.validateRequestedPersonEntry(personId)
    return this.peopleRepository.getPeople(Number(personId))
  }


  addPeople(people: { id: number; name: string; age: number; occupation: string }) {
    console.log(people)
    return this.peopleRepository.createPeople(people)
  }

  removePeople(personId: string) {
    this.validateRequestedPersonEntry(personId)
    return this.peopleRepository.removePeople(personId)
  }
}