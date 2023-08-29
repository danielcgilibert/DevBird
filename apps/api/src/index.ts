import express from 'express'
const app = express()

app.use(express.json())

const PORT = process.env.PORT || 3333

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
