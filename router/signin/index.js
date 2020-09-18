const express = require('express')
var router = express.Router()
const passport = require('passport');

router.post('/', function(req, res, next) {

    passport.authenticate('local-signin', function (err, user, info) {
      var error = err || info;
      if (error) return res.status(401).json(error);
      if (!user) return res.status(404).json({message: 'Something went wrong, please try again.'});

      req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json ({
            name: user.name,
            email: user.email
          });
      })
    })(req, res, next);
  });
module.exports = router;
