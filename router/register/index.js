const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var router = express.Router()
var path = require('path')
const { User } = require('../../models/User')
const config = require('../../config/key')
 /*
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))
*/
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());

router.get('/', (req, res) => {

    return res.status(200).json({
        success: "API request test"
    })

    const user = new User(req.body)

    user.save((err, userInfo) => {
        if (err) return res.json({success: false, err})
        return res.status(200).json({
            success: true
        })
    })
})

module.exports = router;