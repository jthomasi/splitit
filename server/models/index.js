const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  let database = uri || process.env.MONGODB_URI;

  mongoose.connect(database);
  // plug in the promise library:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./home');
  require('./bill');
  require('./roommate');
};