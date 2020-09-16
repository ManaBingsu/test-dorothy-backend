const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors({origin: ["http://localhost:3000/", "http://localhost:3001/"]}));

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var register = require('./router/register/index')

app.listen(process.env.PORT || 3000)

app.use('/register', register)

app.get('/', (req, res) =>{ 
    res.send('Dorothy API : I REALLY HATE CORS')
})
