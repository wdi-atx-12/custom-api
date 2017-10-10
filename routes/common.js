const DB = require('../models');

//returns an object created from a group of key/value pairs
function getObjectFromKeyValuePairs(pairs)
{
	var tmp = {};

	for(var key in pairs) {
		if(key[0] !== "_"){
			if(pairs[key].length !== 0) {
				tmp[`${key}`] = `${pairs[key]}`;
			}
		}
	}

	return tmp;
} // GetObjectFromKeyValuePairs()

function selectSimpleItem(req, res, DbSchema) {
	DbSchema.findOne({_id: req.params.id}, (err, fItem) => {
		res.json(fItem);
	});
}//end of selectSimpleItem()

function selectAllSimpleItems(req, res, DbSchema) {
	DbSchema.find((err, items) => { // send all items as JSON response
		if (err) { return console.log("index error: " + err); }
		res.json(items);
	});
}//end of selectAllSimpleItems()

function insertSimpleItem(req, res, DbSchema) {
	(new DbSchema(req.body)).save((err, newItem) => {
		res.json(newItem);
	});
}//end of insertSimpleItem()

function updateSimpleItem(req, res, DbSchema) {
	//var changeItem = getObjectFromKeyValuePairs();
	DbSchema.update({_id: req.params.id}, {$set: req.body}, {new:true}, (err, fItem) => {
		if (err) { return console.log("index error: " + err); }
		res.json(fItem);
	});
}//end of updateSimpleItem()

function deleteSimpleItem(req, res, DbSchema) {
	// find the index of the item we want to remove
	DbSchema.findOneAndRemove({ _id: req.params.id })
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
