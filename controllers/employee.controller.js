const employeCtrl = {};

const Employee = require('../models/employee');

employeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    try {
        await employee.save();
        res.json({status: 'Employee Saved!'});
    } catch (err) {
        res.json({
            status: err
        });
    }
};

employeCtrl.getEmployee = async (req, res) => {
    const employee = await Employee.findById(req.params.id);
    res.json(employee);
};

employeCtrl.updateEmployee = async (req, res) => {
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary,
    };
    await Employee.findByIdAndUpdate(req.params.id, {$set: employee}, {new: true});
    res.json({status: 'Employee Updated!'});
};

employeCtrl.deleteEmployee = async (req, res) => {
    await Employee.findByIdAndDelete(req.params.id);
    res.json({status: 'Employee Deleted!'});
};

module.exports = employeCtrl;