var LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User')
const { Console } = require ('console');
   
module.exports = function(passport){ // index.js에서 넘겨준 passport입니다.
   passport.serializeUser(function(user, done){ // req.session.passport.user에 세션에 저장하는 과정입니다.
      done(null, user.id); // deserializeUser에 값을 넘겨줍니다.
    });
    passport.deserializeUser(function(id, done){ // 세션에 저장되어있는 값을 DB와 비교하는 과정입니다.
      User.findById(id, function(err, user){
        done(err, user); // 이때 req.user에 저장됩니다.
      })
    });

    passport.use('local-signup', new LocalStrategy({
    usernameField: 'email', // 필드를 정해주는 것 입니다.
      passwordField: 'password',
      passReqToCallback: true  // request객체에 user의 데이터를 포함시킬지에 대한 여부를 결정
    },(req, email, password, done) => {
        User.findOne({'email': email}, (err, user) => {
            if (err) return done(err);
            if (user) {
                return done(null, false, {message : 'your email is already used'})
            }
            const newUser = new User();
        newUser.email = email; // 넘겨받은 정보들을 세팅합니다.
        newUser.password = newUser.generateHash(password); // generateHash을 통해 비밀번호를 hash화 합니다.
        newUser.name = req.body.name;
  
        newUser.save(function (err) { // 저장합니다.
          if (err) throw err;
          return done(null, newUser); // serializeUser에 값을 넘겨줍니다.
        });
        })
    }))
      // 로그인 
  passport.use('local-signin', new LocalStrategy({ // local-signin 라는 전략을짭니다.
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true // 인증을 수행하는 인증 함수로 HTTP request를 그대로  전달할지 여부를 결정한다
  }, function(req, email, password, done){
    User.findOne({'email': email}, function(err, user){
      if (err) return done(err);
      if (!user) return done(null, false, req.flash('signinMessage', '아이디가 존재하지 않습니다.'));
      // validPassword을 통해 비교를 해줍니다.    
      if (!user.validPassword(password)) {
        return done(null, false, req.flash('signinMessage', '비밀번호가 틀렸어요'));}
      return done(null, user); // 성공시 데이터를 넘겨줍니다.
    });
  }));    
}
