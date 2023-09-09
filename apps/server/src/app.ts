import express from 'express'
import cors from 'cors'

// load env variables
import 'dotenv/config'

//Routes
import userRoutes from './routes/user.route'
import authRoutes from './routes/auth.route'

// Create Express server
const app = express()
const PORT = process.env.PORT || 4000

app.use(
  cors({
    credentials: true
  })
)

// Routes
app.use('/user', userRoutes)
app.use('/auth', authRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
