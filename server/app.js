const bodyparser = require('body-parser')
const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./route/user.route');

//setup database
mongoose.connect('mongodb://localhost:27017/userCrud')
//setup express app
const app = express();
const port = 3000;
app.use(bodyparser.json())
app.use('/', userRoute);

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
