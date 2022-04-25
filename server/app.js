const bodyparser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./route/user.route');
const cors = require('cors')
console.log('helalddoa')
//setuap database

mongoose.connect('mongodb://mongo-db:27017/userCrud')
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database`)
})

//setup express app
const app = express();
const port = 3001;
app.use(cors());
app.use(bodyparser.json())
app.use('/', userRoute);
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
