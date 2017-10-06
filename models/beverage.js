const mongoose = require('mongoose');

const Beverage = mongoose.model('Beverage', new mongoose.Schema({
	name: {
		type: String
	},
	price: {
		type: Number,
		default: 0
	}
}));

module.exports = {
	Beverage: Beverage
}
