import request from 'supertest'
import { app } from '..'

describe('People API Routes', () => {
  it('Invalid path failure', async () => {
    const res = await request(app).get('/').expect(404)
    expect(res.status).toBe(404)
  })

  it('GET list of people', async () => {
    const res = await request(app).get('/api/people')
    expect(res.body).toEqual([])
    expect(res.status).toBe(200)
  })

  it('GET person by Id', async () => {
    const newPerson = {
      "id": 8,
      "name": "siva",
      "age": 35,
      "occupation": "CEO"
    }
    await request(app).post('/api/people').send(newPerson)

    const res = await request(app).get('/api/people/8')
    expect(res.body).toEqual([newPerson])
    expect(res.status).toBe(200)
  })

  it('POST - create people ', async () => {
    const newPerson = {
      "id": 1,
      "name": "siva",
      "age": 35,
      "occupation": "CEO"
    }
    const res = await request(app).post('/api/people').send(newPerson)
    expect(res.body).toEqual(newPerson)
    expect(res.status).toBe(201)
  })

  it('POST - create people with invalid data', async () => {
    const newPerson = {
      "id": 1,
      "name": 1,
      "age": 35,
      "occupation": 1
    }
    const res = await request(app).post('/api/people').send(newPerson)
    expect(res.status).toBe(422)
  })

  it('POST - create people with partial data', async () => {
    const newPerson = {
      "id": 1,
      "name": 1,
    }
    const res = await request(app).post('/api/people').send(newPerson)
    expect(res.status).toBe(422)
  })

  it('DELETE - person ', async () => {
    const newPerson = {
      "id": 3,
      "name": "siva",
      "age": 35,
      "occupation": "CEO"
    }
    await request(app).post('/api/people').send(newPerson)

    const res = await request(app).delete(`/api/people/3`)
    expect(res.status).toBe(200)
    expect(res.body).toEqual({ "message": `succesfully removed 1 entry` })
  })
})