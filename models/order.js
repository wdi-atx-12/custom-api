const mongoose = require('mongoose');

//represented as a collection of Orders in the DB.
//sandwiches, desserts, and beverages are arrays of ObjectIds from Sandwich,
// Dessert, and Beverage, respectively
//Ex: {breadType:"white", meats: ["59da8318ad18350483f37e87"], ..., price: 3.99}
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
