var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HomeSchema = new Schema({
    homename: {
    	type: String
    },
    homeemail: {
      type: String,
      unique: true
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

var Home = mongoose.model("Home", HomeSchema);
module.exports = Home;