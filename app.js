const express = require('express')
const app = express()
 
app.listen(process.env.PORT || 3000)

// Hello world example
app.get('/', (req, res) =>{ 
    res.send('Hello world!')
})