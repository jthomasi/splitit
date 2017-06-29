const Home = require('mongoose').model('Home');
const PassportLocalStrategy = require('passport-local').Strategy;

/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const homeData = {
    email: email.trim(),
    password: password.trim(),
    name: req.body.name.trim()
  };

  const newHome = new Home(homeData);
  newHome.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
});