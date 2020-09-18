var express = require('express')
var router = express.Router()
var signup = require('./signup/index')
var signin = require('./signin/index')
var signout = require('./signout/index')
var userpage = require('./userpage/index')
var userauth = require('./userauth/index')

router.use('/signup', signup)
router.use('/signin', signin)
router.use('/signout', signout)
router.use('/userpage', userpage)
router.use('/userauth', userauth)

router.get('/', (req, res) =>{ 
    res.send('Dorothy API')
})

module.exports = router;
