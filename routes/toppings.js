const DB = require('../models');
const Common = require('./common.js');

// exporting functions for use by server.js. Toppings is simple enough to use common functions
module.exports = {
	selectAllItems	: (req, res) => { Common.selectAllSimpleItems(req, res, DB.Topping); },
	selectItem 		: (req, res) => { Common.selectSimpleItem(req, res, DB.Topping); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.Topping); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.Topping); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.Topping); }
};
