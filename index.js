const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config();

const port = process.env.PORT;

const AppointmentRoute=require('./route/AppointmentRoute');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/DCMS').then(()=>{
    app.listen(port, ()=>{
        console.log(`Node server is listening to ${port}`)
    });
}).catch(error=>{
    console.log('Mongodb Error',error);
})

app.use('/api',AppointmentRoute);
