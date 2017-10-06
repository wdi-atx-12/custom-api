const mongoose = require('mongoose');

const Topping = mongoose.model('Topping', new mongoose.Schema({
name: {type: String}
type: {
	type: String,
	enum: ["meat", "vegetables", "cheeses", "sauces" , "spices"]
}));

module.exports = {
  Topping: Topping
}
