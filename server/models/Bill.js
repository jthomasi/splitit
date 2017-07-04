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
        type: String,
      }
});

module.exports = mongoose.model('Bill', BillSchema);