const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors())
const bodyParser = require('body-parser')
const router = require('./router/index')
const session = require('express-session')
const flash = require('connect-flash')
const mongoose = require('mongoose')
require('./modules/DB')(mongoose);
const passport = require('passport');
require("./modules/passport")(passport);

app.listen(process.env.PORT || 3000)

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
}))

app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

app.use(router)
