const Common = require('./common.js');

//Selects one item by parameter id from Order.
//Populates sandwiches, desserts, and beverages with data from Sandwich,
// Dessert, and Beverage, respectively
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

//Selects all items from Order.
//Populates sandwiches, desserts, and beverages with data from Sandwich,
// Dessert, and Beverage, respectively
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

// exporting functions for use by server.js. Order is using some common functions
module.exports = {
	selectAllItems	: (req, res) => { selectAllItems(req, res, DB.Order); },
	selectItem 		: (req, res) => { selectItem(req, res, DB.Order); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.Order); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.Order); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.Order); }
};
