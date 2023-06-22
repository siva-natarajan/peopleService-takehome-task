interface Person {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

export default class PeopleRepository {
  static #peopleRepoInstance: PeopleRepository | null = null
  #peopleList: Person[] = [];

  getPeople(personId?: number) {
    if (personId && personId !== undefined) {
      return this.#peopleList.filter(person => person.id == personId)
    } 
    return this.#peopleList
  }

  createPeople(person: Person) {
    return this.#peopleList.push(person)
  }

  removePeople(personId: number) {
    const personIndex = this.#peopleList.findIndex(ele => ele.id == personId)
    if (personIndex >= 0) {
      this.#peopleList.splice(
        personIndex,
        1
      )
      return 1
    }
    return 0
  }

  static getInstance() {
    if (!this.#peopleRepoInstance) {
      console.log('initialised')
      this.#peopleRepoInstance = new PeopleRepository()
    }
    return this.#peopleRepoInstance
  }
} 