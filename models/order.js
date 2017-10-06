const mongoose = require('mongoose');

const Order = mongoose.model('Order', new mongoose.Schema({
sandwiches: [{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Sandwich'
	}],
desserts: [{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Dessert'
	}],
beverages: [{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'Beverage'
	}]
}));

module.exports = {
  Order: Order
}
