var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  custName: String,
  howMany: Number,
  feedsUpTo: String,
  price: Number,

  //This is how you do a referenced schema
  entrees: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Entree'
  }]
});

var Order = mongoose.model('Order', OrderSchema);

module.exports = Order;
