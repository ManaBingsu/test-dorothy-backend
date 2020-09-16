var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var register = require('./register/index')

router.use('/register', register)

module.exports = router;