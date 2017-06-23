var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var HomeSchema = new Schema({
	  _id: {
    	type: String
    },
    homename: {
    	type: String
    },
    homeemail: {
      type: String
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