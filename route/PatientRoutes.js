const express = require('express');
const patientController = require('/controller/PatientController');

const router = express.Router();

router.post('/save',patientController.savePatient);
router.put('/update',patientController.updatePatient);
router.get('/get',patientController.getAllPatient);
router.delete('/delete',patientController.deletePatient);

module.exports=router;