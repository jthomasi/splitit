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

var Roommate = mongoose.model("Roommate", RoommateSchema);
module.exports = Roommate;