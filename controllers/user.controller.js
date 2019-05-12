const userController = {};
const User = require('../models/user');

userController.getUsersByCredentials = async (req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        console.log("searching: ", email, password);
        let user = await User.find({"$and": [{"email": email}, {"password": password}]});

        if (Object.keys(user).length > 0) {
            res.send({
                message: 'Bienvenido(a) ' + user[0].name,
                userData: user[0]
            });
        } else {
            res.status(401).send({
                message: 'usuario o contraseña inválidos',
                error: 'usuario o contraseña inválidos'
            });
        }
    } catch (err) {
        res.status(500).send({
            status: err.code,
            message: err.message
        });
    }

};

userController.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.json({status: err.code, message: err.message});
    }
};

userController.createUSer = async (req, res) => {
    const user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const userCreated = await user.save();
        res.status(201).send({
            status: '201',
            message: 'User created',
            userData: userCreated
        });
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};

userController.updateUSer = async (req, res) => {
    const user = new User({
        name: req.body.name,
        lastName: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        await User.findByIdAndUpdate(req.params.id, {$set: user}, {new: false});
        res.json({status: '200', message: 'User updated'});
    } catch (err) {
        res.json({status: err.code, message: err.message});
    }
};
module.exports = userController;
