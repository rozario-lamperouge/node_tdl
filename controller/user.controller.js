const UserService = require('../services/user.services')

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