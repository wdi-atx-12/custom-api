// this is an example file showing how you might define route handlers
const DB = require('../models');
const Common = require('./common.js');

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
	selectAllItems	: (req, res) => { Common.selectAllSimpleItems(req, res, DB.Dessert); },
	selectItem 		: (req, res) => { Common.selectSimpleItem(req, res, DB.Dessert); },
	insertItem 		: (req, res) => { Common.insertSimpleItem(req, res, DB.Dessert); },
	updateItem 		: (req, res) => { Common.updateSimpleItem(req, res, DB.Dessert); },
	deleteItem 		: (req, res) => { Common.deleteSimpleItem(req, res, DB.Dessert); }
};
