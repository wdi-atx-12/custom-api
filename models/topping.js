const mongoose = require('mongoose');

//represented as a collection of Toppings in the DB. Ex: {name:"lettuce",type: "meat"}
const Topping = mongoose.model('Topping', new mongoose.Schema({
	name: {
		type: String
	},
	type: {
		type: String,
		enum: ["meat", "vegetable", "cheese", "sauce" , "spice"]
	}
}));

module.exports = {
	Topping: Topping
}
