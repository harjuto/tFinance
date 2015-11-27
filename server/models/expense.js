var mongoose = require('mongoose');
var Schema = mongoose.Schema

var ExpenseSchema = new Schema({
  description:String,
  amount: Number,
  dueDate: Date,
  useNotification: {type: Boolean, default: true},
  notified: {type: Boolean, default: false }
}, {timestamps: true}
);


module.exports = mongoose.model('expense', ExpenseSchema);
