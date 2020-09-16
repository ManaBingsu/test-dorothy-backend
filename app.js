const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var register = require('./router/register/index')

app.listen(process.env.PORT || 3000)

app.use('/register', register)

app.post('/test', (req, res) => {

    return res.json({
        success: true
    })
})

app.get('/', (req, res) =>{ 
    res.send('Dorothy API : I REALLY REALLy HATE CORS')
})
