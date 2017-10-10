const mongoose = require('mongoose');

const SandwichMenu = mongoose.model('SandwichMenu', new mongoose.Schema({
	sandwich: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Sandwich'
	},
	name: { type: String }
}));

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
