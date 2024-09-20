const express=require('express');
const dentistController = require('../controller/DentistController');

const router = express.Router();

router.post('/save',dentistController.saveDentist);
router.put('/update',dentistController.updateDentist);
router.get('/get',dentistController.getAllDentist);
router.delete('/delete',dentistController.deleteDentist);
router.get('/last', dentistController.lastDentist);

module.exports=router;