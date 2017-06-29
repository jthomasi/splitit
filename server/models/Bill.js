var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BillSchema = new Schema({
      name: {
        type: String,
      },
      cost: {
        type: Number,
      },
      due: {
        type: Date,
      }
});

var Bill = mongoose.model("Bill", BillSchema);
module.exports = Bill;