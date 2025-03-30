import request from 'supertest'
import app from '../app'
import { POST_API_URL } from '../constants'

describe('POST /api/posts', () => {
  it('should fetch all posts', async () => {
    const res = await request(app).get(POST_API_URL)
    expect(res.status).toBe(200)
    expect(res.body).toBeInstanceOf(Array)
  })

  it('should fetch a post by ID', async () => {
    const res = await request(app).get(`${POST_API_URL}/1`)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('id', 1)
  })

  it('should create a new post', async () => {
    const newPost = {
      title: 'New Post',
      body: 'This is a new post.',
      userId: 1,
    }
    const res = await request(app).post(POST_API_URL).send(newPost)
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
  })

  it('should update a post', async () => {
    const updatedPost = {
      title: 'Updated Title',
      body: 'Updated body text.',
      userId: 1,
    }
    const res = await request(app).put(`${POST_API_URL}/1`).send(updatedPost)
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('title', 'Updated Title')
  })

  it('should delete a post', async () => {
    const res = await request(app).delete(`${POST_API_URL}/1`)
    expect(res.status).toBe(204)
  })
})
