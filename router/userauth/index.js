const express = require('express')
var router = express.Router()
const passport = require('passport')
const auth = require('../../modules/auth')

router.post('/', function(req, res, next) {
    return auth.isAuthenticated()
  });
