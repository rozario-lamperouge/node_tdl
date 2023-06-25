const UserModel = require('../models/user.model')

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
}

module.exports = UserService;