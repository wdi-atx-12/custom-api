const DB = require('../models');
const Common = require('./common.js');

//Selects one item by parameter id from Sandwich.
//Populates meats, vegetables, cheeses, sauces, and spices with data from Sandwich
function selectItem(req, res, DbSchema) {
	DbSchema.findOne({_id: req.params.id})
	.populate('sandwich')
	.exec((err, items) => { // send all items as JSON respons
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectSimpleItem()

//Selects all items from SandwichMenu.
//Populates sandwich with data from Sandwich
function selectAllItems(req, res, DbSchema) {
	DbSchema.find()
	.populate('sandwich')
	.exec((err, items) => { // send all items as JSON respons
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectAllSimpleItems()

// exporting functions for use by server.js. SandwichMenu is using some common functions
module.exports = {
	selectAllItems	: (req, res) => { selectAllItems(req, res, DB.SandwichMenu); },
	selectItem 		: (req, res) => { selectItem(req, res, DB.SandwichMenu); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.SandwichMenu); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.SandwichMenu); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.SandwichMenu); }
};
