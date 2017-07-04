const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// define the Home model schema
const HomeSchema = new Schema({
      name: {
        type: String
      },
      email: {
        type: String,
        index: { unique: true }
      },
      password: {
        type: String
      },
      roommates: [{
        type: Schema.Types.ObjectId,
        ref: "Roommate"
      }],
      bills: [{
        type: Schema.Types.ObjectId,
        ref: "Bill"
      }]
});

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
HomeSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};


/**
 * The pre-save hook method.
 */
HomeSchema.pre('save', function saveHook(next) {
  const home = this;

  // proceed further only if the password is modified or the user is new
  if (!home.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(home.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      home.password = hash;

      return next();
    });
  });
});

module.exports = mongoose.model('Home', HomeSchema);