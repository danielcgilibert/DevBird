import express, { json } from 'express'

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

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

// Routes

app.use('/user', userRoutes)
app.use('/auth', authRoutes)
app.use('/tweets', tweetsRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
