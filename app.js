const express = require('express')
const app = express()
var cors = require('cors');
app.use(cors());

var register = require('./router/register/index')

app.listen(process.env.PORT || 3000)

app.use('/register', register)

// Hello world example
app.get('/', (req, res) =>{ 
    res.send('Hello world?')
})

