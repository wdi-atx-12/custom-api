const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const AccountSchema = new Schema({
  name: String,
  events: [{
    type: Schema.Types.ObjectId,
    ref: 'Recurrence',
  }]
});

module.exports.Account = mongoose.model('Account', AccountSchema);
