const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserModel = require('./user.model');

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
})

const ToDoModel = mongoose.model("todo", todoSchema)

module.exports = ToDoModel;