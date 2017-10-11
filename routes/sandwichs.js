const DB = require('../models');
const Common = require('./common.js');

//Selects one item by parameter id from Sandwich.
//Populates meats, vegetables, cheeses, sauces, and spices with data from Topping
function selectItem(req, res, DbSchema) {
	DbSchema.findOne({_id: req.params.id})
	.populate('meats')
	.populate('vegetables')
	.populate('cheeses')
	.populate('sauces')
	.populate('spices')
	.exec((err, items) => { // send all items as JSON respons
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectSimpleItem()

//Selects all items from Sandwich.
//Populates meats, vegetables, cheeses, sauces, and spices with data from Topping
function selectAllItems(req, res, DbSchema) {
	DbSchema.find()
	.populate('meats')
	.populate('vegetables')
	.populate('cheeses')
	.populate('sauces')
	.populate('spices')
	.exec((err, items) => { // send all items as JSON respons
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectAllSimpleItems()

// exporting functions for use by server.js. Sandwich is using some common functions
module.exports = {
	selectAllItems	: (req, res) => { selectAllItems(req, res, DB.Sandwich); },
	selectItem 		: (req, res) => { selectItem(req, res, DB.Sandwich); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.Sandwich); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.Sandwich); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.Sandwich); }
};
