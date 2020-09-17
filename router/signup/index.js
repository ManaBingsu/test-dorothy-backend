const express = require('express')
var router = express.Router()
const passport = require('passport')
/*
router.post('/', (req, res, next) => {
    passport.authenticate('local-signup', (err, user, info) => {
        return res.send('dd');
        if (error) return res.status(500).json(error);
        if (!user) return res.status(401).json(info.message);
        return res.json({
            success: true
        });
    })
});*/

router.post('/', function(req, res, next) {

    passport.authenticate('local-signup', function (err, user, info) {
      var error = err || info;
      if (error) return res.status(401).json(error);
      if (!user) return res.status(404).json({message: 'Something went wrong, please try again.'});
   
      // 인증된 유저 정보로 응답
      res.json( {
        success: true,
        email : req.body.email});
    })(req, res, next);
  });

module.exports = router;
