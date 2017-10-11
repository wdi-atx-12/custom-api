const mongoose = require('mongoose');

//represented as a collection of Desserts in the DB. Ex: {name:"cookie",price: 0.50}
const Dessert = mongoose.model('Dessert', new mongoose.Schema({
	name: {
		type: String
	},
	price: {
		type: Number,
		default: 0
	}
}));

module.exports = {
	Dessert: Dessert
}
