import express from 'express'
import mongoose from 'mongoose'

//setup database
mongoose.connect('mongodb://localhost:27017/userCrud')
//setup express app
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
