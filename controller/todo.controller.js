const TodoServices = require('../services/todo.services');

const createTodo = async (req, res) => {
    try {
        const { userId, title, desc } = req.body;
        let todo = await TodoServices.createTodo(userId, title, desc);
        res.json({
            status: true,
            sucess: todo
        })
    } catch (err) {
        console.log(err);
    }
}

const getTodo = async (req, res) => {
    try {
        const { userId } = req.body;
        let todos = await TodoServices.getTododata(userId);
        res.json({
            status: true,
            sucess: todos
        })
    } catch (err) {
        console.log(err);
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.body;
        let deleted = await TodoServices.deleteTodo(id);
        res.json({
            status: true,
            sucess: deleted
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    createTodo,
    getTodo,
    deleteTodo
}