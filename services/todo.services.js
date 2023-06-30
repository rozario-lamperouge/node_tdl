const TodoModel = require('../models/todo.model');

class TodoService {
    static async createTodo(userId, title, desc) {
        const createTodo = new TodoModel({ userId, title, desc });
        return await createTodo.save();
    }

    static async getTododata(userId) {
        const tododata = await TodoModel.find({ userId });
        return tododata;
    }

    static async deleteTodo(id) {
        const deleted = await TodoModel.findOneAndDelete({ _id: id });
        return deleted;
    }
}

module.exports = TodoService 