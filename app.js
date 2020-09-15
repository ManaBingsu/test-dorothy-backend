const express = require('express')
const app = express()
/*
var cors = require('cors');
const corsOption = {
    origin: process.env.CORS_ORIGIN || '*', 
    methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'], 
    allowedHeaders: ["Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"]
};
app.use(cors(corsOption));*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var register = require('./router/register/index')

app.listen(process.env.PORT || 3000)

app.use('/register', register)

app.get('/', (req, res) =>{ 
    res.send('Dorothy API : I HATE CORS')
})
