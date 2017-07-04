var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RoommateSchema = new Schema({
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      percentage: {
        type: Number,
        default: 0
      }
});

module.exports = mongoose.model('Roommate', RoommateSchema);