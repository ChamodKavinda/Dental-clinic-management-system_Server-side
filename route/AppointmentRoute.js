const express = require('express');
const appointmentController=require('../controller/AppointmentController');

const router = express.Router();

router.post('/save', appointmentController.saveAppointment);

module.exports=router;