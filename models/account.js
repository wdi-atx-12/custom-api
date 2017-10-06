const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: { type: String, required: true },
  acctNo: { type: String, required: true },
  routingNo: { type: String, required: true },
  tags: [String],
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Recurrence',
  }],
});

module.exports.Account = mongoose.model('Account', AccountSchema);
