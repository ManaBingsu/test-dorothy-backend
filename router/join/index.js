const express = require('express')
const app = express()
var router = express.Router()
var path = require('path')
const User = require('../../models/User')

app.post('/' , (req, res) => {
    // 이메일을 데이터베이스에서 찾음
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user){
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch){
                return res.json({
                    loginSuccess: false,
                    message: "비밀번호가 틀렸습니다."
                })
                
            }
        })
    })
})

module.exports = router;