import express from 'express'
import cors from 'cors'

//Routes
import userRoutes from './src/routes/user.route'
import authRoutes from './src/routes/auth.route'

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
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
