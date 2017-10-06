const DB = require('../models');

//returns an object created from a group of key/value pairs
function GetObjectFromKeyValuePairs(pairs)
{
	var tmp = {};

	for(var key in pairs)
	if(key[0] !== "_")
	if(pairs[key].length !== 0)
	tmp[`${key}`] = `${pairs[key]}`;

	return tmp;
} // GetObjectFromKeyValuePairs()

function selectSimpleItem(req, res, dbSchema) {
	DbSchema.findOne({_id: req.params.id}, (err, fItem) => {
		res.json(fItem);
	});
}//end of selectSimpleItem()

function selectAllSimpleItems(req, res, dbSchema) {
	dbSchema.find((err, items) => { // send all items as JSON response
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectAllSimpleItems()

function insertSimpleItem(req, res, dbSchema) {
	(new dbSchema(req.body)).save((err, newItem) => {
		res.json(newItem);
	});
}//end of insertSimpleItem()

function updateSimpleItem(req, res, dbSchema) {
	var changeItem = GetObjectFromKeyValuePairs(req.body);
	DbSchema.findOneAndUpdate({_id: req.params.id}, changeItem, {new:true}, (err, fItem) => {
		res.json(changeItem);
	});
}//end of updateSimpleItem()

function deleteSimpleItem(req, res, dbSchema) {
	// find the index of the item we want to remove
	dbSchema.findOneAndRemove({ _id: req.params.id })
	.exec(function (err, deletedItem) {
		res.json(deletedItem);
	});
}//end of deleteSimpleItem()

module.exports = {
	selectAllSimpleItems : selectAllSimpleItems,
	selectSimpleItem : selectSimpleItem,
	insertSimpleItem : insertSimpleItem,
	updateSimpleItem : updateSimpleItem,
	deleteSimpleItem : deleteSimpleItem
};
