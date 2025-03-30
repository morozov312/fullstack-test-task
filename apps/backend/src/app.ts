import express from 'express'
import postRoutes from './routes/postRoutes'
import { POST_API_URL } from './constants'

const app = express()

app.use(express.json())
app.use(POST_API_URL, postRoutes)

export default app
