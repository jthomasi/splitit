const jwt = require('jsonwebtoken');
const Home = require('mongoose').model('Home');
const config = require('../../config');

/**
 *  The Auth Checker middleware function.
 */
module.exports = (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).end();
  }

  // get the last part from a authorization header string like "bearer token-value"
  const token = req.headers.authorization.split(' ')[1];
  
  // decode the token using a secret key-phrase
  return jwt.verify(token, process.env.JWT_SECRET || config.jwtSecret, (err, decoded) => {
    // the 401 code is for unauthorized status
    if (err) { return res.status(401).end(); }

    const homeId = decoded.sub;

    // check if a user exists
    return Home.findById(homeId, (homeErr, home) => {
      if (homeErr || !home) {
        return res.status(401).end();
      }

      return next();
    });
  });
};