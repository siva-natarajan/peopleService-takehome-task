interface Person {
  id: number;
  name: string;
  age: number;
  occupation: string;
}

export default class PeopleRepository {
  static #peopleRepoInstance: PeopleRepository | null = null
  #peopleList: Person[] = [];

  getPeople() {
    return this.#peopleList
  }

  createPeople(person: Person) {
    return this.#peopleList.push(person)
  }

  static getInstance() {
    if (!this.#peopleRepoInstance) {
      console.log('initialised')
      this.#peopleRepoInstance = new PeopleRepository()
    }
    return this.#peopleRepoInstance
  }
} 