const express = require('express');
const appointmentController=require('../controller/AppointmentController');

const router = express.Router();

router.post('/save', appointmentController.saveAppointment);
router.get('/get', appointmentController.getAppointment);
router.put('/update', appointmentController.updateAppointment);
router.delete('/delete', appointmentController.deleteAppointment);

module.exports=router;