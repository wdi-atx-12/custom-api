const mongoose = require('mongoose');

const Topping = mongoose.model('Topping', new mongoose.Schema({
	name: {type: String},
	type: {
		type: String,
		enum: ["meat", "vegetable", "cheese", "sauce" , "spice"]
	}
}));

module.exports = {
	Topping: Topping
}
