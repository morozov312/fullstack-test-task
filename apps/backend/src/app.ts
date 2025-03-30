import express from 'express'
import postRoutes from './routes/postRoutes'
import { POST_API_URL } from './constants'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(POST_API_URL, postRoutes)

export default app
