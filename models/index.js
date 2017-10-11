const mongoose = require('mongoose');

//import models
const order = require('./order');
const sandwich = require('./sandwich');
const topping = require('./topping');
const beverage = require('./beverage');
const dessert = require('./dessert');

//configure dotenv for reading .env properties
require('dotenv').config();

// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI ||process.env.DB_CONN, {}, (err, conn) => {
	if (err) { 	console.log('Error connecting to Mongo DB.', err); }
	else 	 {	console.log('Mongoose successfully connected to Mongo DB.'); }
});

//add mongo DB error event
mongoose.connection.on('error', (err) => {
	console.log(`MongoDB error: ${err}`);
});

//exporting models for use by other files
module.exports = {
	Dessert: dessert.Dessert,
	Beverage: beverage.Beverage,
	Topping: topping.Topping,
	Sandwich: sandwich.Sandwich,
	Order: order.Order,
	SandwichMenu: sandwich.SandwichMenu
};
