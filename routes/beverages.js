const DB = require('../models');
const Common = require('./common.js');

// exporting functions for use by server.js. Beverages is simple enough to use common functions
module.exports = {
	selectAllItems	: (req, res) => { Common.selectAllSimpleItems(req, res, DB.Beverage); },
	selectItem 		: (req, res) => { Common.selectSimpleItem(req, res, DB.Beverage); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.Beverage); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.Beverage); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.Beverage); }
};
