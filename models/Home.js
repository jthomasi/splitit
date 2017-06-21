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
      rmname: {
        type: String,
        default: ""
      },
      rmemail: {
        type: String,
        default: ""
      },
      percentage: {
        type: Number,
        default: 0
      }
    }],
    bills: [{
      billname: {
        type: String,
        default: ""
      },
      cost: {
        type: Number,
        default: 0
      },
      due: {
        type: Date,
        default: ""
      }
    }]
});

var Home = mongoose.model("Home", HomeSchema);
module.exports = Home;