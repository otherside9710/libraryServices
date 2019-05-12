const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user.controller');
const employeeCtrl = require('../controllers/employee.controller');

router.get('/', employeeCtrl.getEmployees);
router.post('/', employeeCtrl.createEmployee);
router.get('/:id', employeeCtrl.getEmployee);
router.put('/:id', employeeCtrl.updateEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);

router.post('/getUser', userCtrl.getUsers);
router.post('/login', userCtrl.getUsersByCredentials);
router.post('/createUser', userCtrl.createUSer);

module.exports = router;