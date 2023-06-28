const UserModel = require('../models/user.model')
const jwt = require('jsonwebtoken')

class UserService {
    static async registeruser(email, password) {
        try {
            const createuser = new UserModel({ email, password });
            return await createuser.save()
        }
        catch (err) {
            console.log(err);
        }
    }

    static async checkuser(email) {
        try {
            return await UserModel.findOne({ email });
        } catch (err) {
            console.log(err);
        }
    }

    static async generatetoken(tokenData, secretkey, jwtexpire) {
        try {
            return jwt.sign(tokenData, secretkey, { expiresIn: jwtexpire });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = UserService;