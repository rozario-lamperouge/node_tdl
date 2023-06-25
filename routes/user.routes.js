const express = require('express');
const usercont = require('../controller/user.controller')

const router = express.Router()

router.post('/register', usercont.register);

module.exports = router;