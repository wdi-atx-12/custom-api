// this is an example file showing how you might define route handlers
const DB = require('../models');
const Common = require('./common.js');


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

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
	selectAllItems	: (req, res) => { selectAllItems(req, res, DB.Sandwich); },
	selectItem 		: (req, res) => { selectItem(req, res, DB.Sandwich); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.Sandwich); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.Sandwich); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.Sandwich); }
};
