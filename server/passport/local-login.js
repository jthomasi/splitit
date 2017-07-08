const jwt = require('jsonwebtoken');
const Home = require('mongoose').model('Home');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');


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
    password: password.trim()
  };

  // find a user by email address
  return Home.findOne({ email: homeData.email }, (err, home) => {
    if (err) { return done(err); }

    if (!home) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }

    // check if a hashed user's password is equal to a value saved in the database
    return home.comparePassword(homeData.password, (passwordErr, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: home._id
      };

      // create a token string
      const token = jwt.sign(payload, process.env.JWT_SECRET || config.jwtSecret);
      
      const data = {
        name: home.name
      };

      return done(null, token, data);
    });
  });
});