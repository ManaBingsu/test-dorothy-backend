const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());
// For CORS error
app.options('*', cors())

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var register = require('./router/register/index')

app.listen(process.env.PORT || 3000)

app.use('/register', register)

app.get('/', (req, res) =>{ 
    res.send('Dorothy API')
})
