const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require("./auth/Routes/AuthRoute");
const bodyParser = require('body-parser')
require('dotenv').config();
const cookieParser = require("cookie-parser");

const port = process.env.PORT;

const AppointmentRoute=require('./route/AppointmentRoute');
const PatientRoute=require('./route/PatientRoutes');
const DentistRoute=require('./route/DentistRoute')

const app = express();

app.use(cors({
    origin: "http://localhost:5173", // Allow requests from the frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/DCMS').then(()=>{
    app.listen(port, ()=>{
        console.log(`Node server is listening to ${port}`)
    });
}).catch(error=>{
    console.log('Mongodb Error',error);
})

app.use('/appointment',AppointmentRoute);
app.use('/patient',PatientRoute);
app.use('/dentist',DentistRoute)
app.use("/", authRoute);