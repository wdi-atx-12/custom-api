const mongoose = require('mongoose');
require('dotenv').config();
// TODO: include all model files here (and export models together below)
const order = require('./order');
const sandwich = require('./sandwich');
const topping = require('./topping');
const beverage = require('./beverage');
const dessert = require('./dessert');
//mongoose.set('debug', true);

// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI ||process.env.DB_CONN, {}, function(err, conn) {
	if (err) {
		console.log('Error connecting to Mongo DB.', err);
	} else {
		console.log('Mongoose successfully connected to Mongo DB.');
	}
});

mongoose.connection.on('error', (err) => {
	console.log(`MongoDB error: ${err}`);
});

module.exports = {
	Dessert: dessert.Dessert,
	Beverage: beverage.Beverage,
	Topping: topping.Topping,
	Sandwich: sandwich.Sandwich,
	Order: order.Order,
	SandwichMenu: sandwich.SandwichMenu
};
