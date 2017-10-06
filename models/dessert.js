const mongoose = require('mongoose');

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
