const DB = require('../models');

//Selects one item by parameter id from specified DBSchema
function selectSimpleItem(req, res, DbSchema) {
	DbSchema.findOne({_id: req.params.id}, (err, fItem) => {
		res.json(fItem);
	});
}//end of selectSimpleItem()

//Selects all items from specified DBSchema
function selectAllSimpleItems(req, res, DbSchema) {
	DbSchema.find((err, items) => { // send all items as JSON response
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectAllSimpleItems()

//Creates a simple item. Inserts item into the specified DBSchema
function insertSimpleItem(req, res, DbSchema) {
	(new DbSchema(req.body)).save((err, newItem) => {
		res.json(newItem);
	});
}//end of insertSimpleItem()

//Updates one item by parameter id from specified DBSchema
function updateSimpleItem(req, res, DbSchema) {
	DbSchema.update({_id: req.params.id}, {$set: req.body}, {new:true}, (err, uItem) => {
		if (err) { return console.log("index error: " + err); }
		res.json(uItem);
	});
}//end of updateSimpleItem()

//Deletes one item by parameter id from specified DBSchema
function deleteSimpleItem(req, res, DbSchema) {
	DbSchema.findOneAndRemove({ _id: req.params.id }).exec((err, dItem) => {
		res.json(dItem);
	});
}//end of deleteSimpleItem()

//exporting common, simple CRUD methods for use by other routes
module.exports = {
	selectAllSimpleItems : selectAllSimpleItems,
	selectSimpleItem : selectSimpleItem,
	insertSimpleItem : insertSimpleItem,
	updateSimpleItem : updateSimpleItem,
	deleteSimpleItem : deleteSimpleItem
};
