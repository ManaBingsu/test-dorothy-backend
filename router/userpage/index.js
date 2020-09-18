const express = require('express')
var router = express.Router()
const passport = require('passport');
const auth = require('../../modules/auth')

router.post('/', function(req, res, next) {
    auth.isAuthenticated(req, res, () => {
        
    });
    // 토큰 인증
    console.log(authuser)
    if (!authuser['success'])
        return res.json({
            success : false
    });
    
    // 인증된 유저 정보로 응답
    return res.json({
        success : true
    });
});

module.exports = router;
