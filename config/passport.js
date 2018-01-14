const passport = require('passport');
const LocalStrategy = require('passport-local');
const db = require('../models');

passport.use(new LocalStrategy(
  {
    usernameField: 'email'
  },
  function(email, passport, done) {
    db.User.findOne({
      where: {
        email: email
      }
    }).then((dbUser) => {
      if (!dbUser) {
        return done(null, false, {
          message: 'Encorred email.'
        });
      }
      else if (!dbUser.validPassword(password)) {
        return done (null, false, {
          message: 'incorred password.'
        });
      } 
      return done(null, dbUser);
    });
  }
));
passport.serializeUser((user, cb) => {
  cd(null, user);
});
passport.deserializeUser((obj, cd) => {
  cd(null, obj);
});
module.exports = passport;
