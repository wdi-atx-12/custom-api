// this is an example file showing how you might define route handlers
const DB = require('../models');
const Common = require('./common.js');


function selectItem(req, res, DbSchema) {
	DbSchema.findOne({_id: req.params.id})
	.populate('sandwiches')
	.populate('desserts')
	.populate('beverages')
	.exec((err, items) => { // send all items as JSON respons
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectSimpleItem()

function selectAllItems(req, res, DbSchema) {
	DbSchema.find()
	.populate('sandwiches')
	.populate('desserts')
	.populate('beverages')
	.exec((err, items) => { // send all items as JSON respons
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectAllSimpleItems()

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
	selectAllItems	: (req, res) => { selectAllItems(req, res, DB.SandwichMenu); },
	selectItem 		: (req, res) => { selectItem(req, res, DB.SandwichMenu); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.SandwichMenu); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.SandwichMenu); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.SandwichMenu); }
};
