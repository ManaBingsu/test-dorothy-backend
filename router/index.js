var express = require('express')
var router = express.Router()
var signup = require('./signup/index')
var signin = require('./signin/index')

router.use('/signup', signup)
router.use('/signin', signin)

router.get('/', (req, res) =>{ 
    res.send('Dorothy API')
})

module.exports = router;
