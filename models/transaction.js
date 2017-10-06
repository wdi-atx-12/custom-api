const Schema = require('mongoose').Schema;

const TransactionSchema = new Schema({
  name: { type: String, required: true },
  date: Date,
  amount: { type: Number, required: true },
  tags: [String],
});

module.exports.TransactionSchema = TransactionSchema;
