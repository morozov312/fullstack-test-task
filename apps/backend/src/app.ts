import express from 'express'
// import postRoutes from './routes/postRoutes'

const app = express()

app.use(express.json())
// app.use('/api/posts', postRoutes)

export default app
