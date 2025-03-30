import axios from 'axios'
import { Request, Response } from 'express'
import { API_URL } from '../constants'

export const getPosts = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(API_URL)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching posts' })
  }
}

export const getPost = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    const response = await axios.get(`${API_URL}/${id}`)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching post' })
  }
}

export const createPost = async (req: Request, res: Response) => {
  try {
    const newPost = req.body
    const response = await axios.post(API_URL, newPost)
    res.status(201).json(response.data)
  } catch (error) {
    res.status(500).json({ message: 'Error creating post' })
  }
}

export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params
  const updatedPost = req.body
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedPost)
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ message: 'Error updating post' })
  }
}

export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params
  try {
    await axios.delete(`${API_URL}/${id}`)
    res.status(204).end()
  } catch (error) {
    res.status(500).json({ message: 'Error deleting post' })
  }
}
