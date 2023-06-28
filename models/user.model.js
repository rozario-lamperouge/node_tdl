const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: "String",
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: "String",
        required: true
    }
})

UserSchema.pre('save', async function () {
    try {
        var user = this;
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
    }
    catch (err) {
        console.log(
            err
        )
    }
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel;