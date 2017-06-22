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
      }
});

var Roommate = mongoose.model("Roommate", RoommateSchema);
module.exports = Roommate;