import express, { json } from 'express'
import cookieParser from 'cookie-parser'

// Load environment variables
import 'dotenv/config'

//Routes
import userRoutes from '@routes/user.route'
import authRoutes from '@routes/auth.route'
import tweetsRoutes from '@routes/tweets.route'
// Middlewares
import { corsMiddleware } from '@middlewares/cors'

// Create Express server
const app = express()
const PORT = process.env.PORT || 4000

app.use(corsMiddleware())
app.use(json())
app.use(cookieParser())
app.disable('x-powered-by')

// Routes

app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.use('/tweets', tweetsRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
