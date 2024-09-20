const express = require('express');
const EmployeeController = require('../controller/EmployeeController');

const router =  express.Router();

router.post('/save',EmployeeController.saveEmployee)
router.put('/update',EmployeeController.updateEmployee)
router.delete('/delete',EmployeeController.deleteEmployee)
router.get('/get',EmployeeController.getAllEmployee)
router.get('/last', EmployeeController.lastEmployee);

module.exports=router;