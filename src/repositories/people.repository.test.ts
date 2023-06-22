import PeopleRepository from "./people.repository"

describe("People repository", () => {

  it("singleton class", () => {
    jest.spyOn(console, 'log')
    PeopleRepository.getInstance()
    PeopleRepository.getInstance()
    expect(console.log).toBeCalledTimes(1)
  })
  it("getPeople", () => {
    const singletonInstance = PeopleRepository.getInstance()
    expect(singletonInstance.getPeople()).toEqual([])
  })

  it("createPeople", () => {
    const singletonInstance = PeopleRepository.getInstance()
    const peopleId = 100
    const people = { "id": peopleId, "name": "siva", "age": 3, "occupation": "baby" }
    const addition = singletonInstance.createPeople(people)
    expect(addition).toEqual(1)
    expect(singletonInstance.getPeople()).toEqual([people])
  })
})