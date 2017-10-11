const DB = require('../models');

// exporting functions for use by server.js. Desserts is simple enough to use common functions
module.exports = {
	selectAllItems	: (req, res) => { Common.selectAllSimpleItems(req, res, DB.Dessert); },
	selectItem 		: (req, res) => { Common.selectSimpleItem(req, res, DB.Dessert); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.Dessert); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.Dessert); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.Dessert); }
};
