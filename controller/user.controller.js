const UserService = require('../services/user.services')
const bcrypt = require('bcrypt')

exports.register = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserService.registeruser(email, password);
        res.status(201).json(user);
    }
    catch (err) {
        console.log(err)
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await UserService.checkuser(email);
        if (!user) {
            throw new Error('User not found');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch == false) {
            throw new Error('Incorrect password');
        }

        let tokenData = {
            id: user._id,
            email: user.email
        }

        const token = await UserService.generatetoken(tokenData, "secret", "1h");
        res.status(200).json({
            status: true,
            token: token
        })
    }
    catch (err) {
        console.log(err)
    }
}