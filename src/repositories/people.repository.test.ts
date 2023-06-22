import PeopleRepository from "./people.repository"

describe("People repository design pattern", () => {
  it("singleton class", () => {
    jest.spyOn(console, 'log')
    PeopleRepository.getInstance()
    PeopleRepository.getInstance()
    expect(console.log).toBeCalledTimes(1)
  })
})

describe("People repository Data class", () => {
  let singletonInstance: PeopleRepository
  const personId = 100
  const samplePerson = { "id": personId, "name": "siva", "age": 3, "occupation": "baby" }
  beforeAll(() => {
    singletonInstance = PeopleRepository.getInstance()
  })
  it("getPeople", () => {
    expect(singletonInstance.getPeople()).toEqual([])
  })

  it("createPeople", () => {
    const addition = singletonInstance.createPeople(samplePerson)
    expect(addition).toEqual(1)
    expect(singletonInstance.getPeople()).toEqual([samplePerson])
  })

  it("getPeopleById", () => {
    expect(singletonInstance.getPeople(personId)).toEqual([samplePerson])
  })

})