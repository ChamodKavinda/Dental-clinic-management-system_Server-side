const express = require('express');
const appointmentController=require('../controller/AppointmentController');
const router = express.Router();
const mailController = require('../mailController');

router.post('/save', appointmentController.saveAppointment);
router.get('/get', appointmentController.getAppointment);
router.put('/update', appointmentController.updateAppointment);
router.delete('/delete', appointmentController.deleteAppointment);

router.post("/sendEmail",mailController.emailSender);


module.exports=router;