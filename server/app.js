import express from 'express'
import mongoose from 'mongoose'
import userRoute from './route/user.route'

//setup database
mongoose.connect('mongodb://localhost:27017/userCrud')
//setup express app
const app = express()
const port = 3000

app.use('/',userRoute)

app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})
