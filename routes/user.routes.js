const express = require('express');
const usercont = require('../controller/user.controller')

const router = express.Router()

router.post('/register', usercont.register);
router.post('/login', usercont.login);

module.exports = router;