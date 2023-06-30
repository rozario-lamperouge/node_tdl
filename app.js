const express = require('express');
const userroutes = require('./routes/user.routes')
const todoroutes = require('./routes/todo.routes')
const bodyparser = require('body-parser')

const app = express();

app.use(bodyparser.json())
app.use(userroutes)
app.use(todoroutes)

module.exports = app;