const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var router = express.Router()
var cors = require('cors');
router.use(cors());
var path = require('path')
const { User } = require('../../models/User')
const config = require('../../config/key')

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.post('/', (req, res) => {

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

router.get('/', (req, res) => {
    res.send('Register API')
})

module.exports = router;