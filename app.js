const express = require('express')
const app = express()

var register = require('./router/register/index')

app.listen(process.env.PORT || 3000)

app.use('/register', register)

// Hello world example
app.get('/', (req, res) =>{ 
    res.send('Hello world?')
})

