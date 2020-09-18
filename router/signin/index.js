const express = require('express')
var router = express.Router()
const passport = require('passport');
const auth = require('../../modules/auth')

router.post('/', function(req, res, next) {

    passport.authenticate('local-signin', function (err, user, info) {
      var error = err || info;
      if (error) return res.status(401).json(error);
      if (!user) return res.status(404).json({message: 'Something went wrong, please try again.'});

      req.logIn(user, function(err) {
          if (err) { return next(err); }
          var token = auth.signToken(user.email)
          return res.json ({
            accesstoken: token,
            name: user.name,
            email: user.email
          });
      })
    })(req, res, next);
  });
module.exports = router;
