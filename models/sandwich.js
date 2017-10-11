const mongoose = require('mongoose');

//represented as a collection of SandwichMenus in the DB.
//Ex: {name:"Veggie", sandwich: "59da8318ad18350483f37e87"}
const SandwichMenu = mongoose.model('SandwichMenu', new mongoose.Schema({
	name: {
		type: String
	},
	sandwich: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Sandwich'
	}
}));

//represented as a collection of Sandwiches in the DB.
//meats, vegetables, cheeses, sauces, and spices are arrays of ObjectIds in Topping
//Ex: {breadType:"white", meats: ["59da8318ad18350483f37e87"], ..., price: 3.99}
const Sandwich = mongoose.model('Sandwich', new mongoose.Schema({
	breadType: {
		type: String,
		enum: ["white", "wheat", "sourdough", "flatbread", "jalapeno cheddar"]
	},
	meats: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topping'
	}],
	vegetables: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topping'
	}],
	cheeses: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topping'
	}],
	sauces: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topping'
	}],
	spices: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Topping'
	}],
	price: {
		type: Number,
		default: 0
	}
}));

module.exports = {
	Sandwich: Sandwich,
	SandwichMenu: SandwichMenu
}
