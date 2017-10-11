const mongoose = require('mongoose');

//represented as a collection of Beverages in the DB. Ex: {name:"coke",price: 0.99}
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
