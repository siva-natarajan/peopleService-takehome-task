import PeopleService from "./people.services"

describe('PeopleService', () => {
  let mockTwiddleService: any
  beforeAll(() => {
    jest.clearAllMocks()
  })
  beforeEach(() => {
    mockTwiddleService = {
      getPeople: jest.fn(() => "b"),
      createPeople: jest.fn(() => "b"),
      removePeople: jest.fn(() => "b"),
    };

  })
  it('getPeopleList', async () => {
    const service = new PeopleService(mockTwiddleService)
    service.getPeopleList()
    expect(mockTwiddleService.getPeople).toBeCalledTimes(1)
  })
  it('addPeople', async () => {
    const service = new PeopleService(mockTwiddleService)
    const person = { id: 1, name: "", age: 1, occupation: "" }
    service.addPeople(person)
    expect(mockTwiddleService.createPeople).toBeCalledTimes(1)
    expect(mockTwiddleService.createPeople).toBeCalledWith(person)
  })

  it('removePeople', async () => {
    const service = new PeopleService(mockTwiddleService)
    service.validateRequestedPersonEntry = jest.fn()
    service.removePeople("1")
    expect(mockTwiddleService.removePeople).toBeCalledTimes(1)
    expect(mockTwiddleService.removePeople).toBeCalledWith("1")
  })

  it('getPersonById invalid ID', async () => {
    const service = new PeopleService(mockTwiddleService)
    service.validateRequestedPersonEntry = jest.fn()
    service.getPersonById("adfadsf")
    expect(mockTwiddleService.getPeople).toBeCalledTimes(1)
  })


  afterAll(() => {
    jest.clearAllMocks()
  })
})