const express = require('express')
var router = express.Router()
const passport = require('passport')
const auth = require('../../modules/auth')

router.post('/', function(req, res, next) {
    auth.authuser(req, res);
});

module.exports = router;
