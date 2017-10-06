// this is an example file showing how you might define route handlers

const DB = require('../models');

//selects all beverages from the DB
var selectAllBeverages = (req,res) => {
  DB.Beverage.find() // send all beverages as JSON response
    .exec((err, beverages) => {
      if (err) { return console.log("index error: " + err); }
      res.json(beverages);
    });
} // end of selectAllBeverages()

//selects a single beverage from the DB (by id)
var selectBeverage = (req,res) => {
	DB.Beverage.findOne({_id: req.params.id}, (err, fBeverage) => {
		res.json(fBeverage);
	});
} // end of selectBeverage()

// creates a new beverage in the BD
var insertBeverage = (req, res) => {

	// find the author from req.body
	DB.Author.findOne({name: req.body.author}, (err, author) => {
		if (err) return console.log(err);

		// if that author doesn't exist yet, create a new one
		if (author === null) {
			DB.Author.create({name:req.body.author, alive:true}, (err, newAuthor) => {
				createBeverageWithAuthorAndRespondTo(DB.Beverage(req.body), newAuthor, res);
			});
		} else {
			createBeverageWithAuthorAndRespondTo(DB.Beverage(req.body), author, res);
		}
	});
} // end of insertBeverage()

//updates a single beverage from the DB (by id)
var updateBeverage = (req, res) => {
	var changeBeverage = GetObjectFromKeyValuePairs(req.body);
	DB.Beverage.findOneAndUpdate({_id: req.params.id}, changeBeverage, {new:true}, (err, fBeverage) => {
		res.json(changeBeverage);
	});
} // end of updateBeverage()

//deletes a single beverage from the DB (by id)
var deleteBeverage = (req, res) => {
	// DB.Beverage.findOneAndRemove({_id: req.params.id}, (err, fBeverage) => {
	// 	res.json(fBeverage);
	// });
	// get beverage id from url params (`req.params`)
  console.log('beverages delete', req.params);
  var beverageId = req.params.id;
  // find the index of the beverage we want to remove
  DB.Beverage.findOneAndRemove({ _id: beverageId })
    .exec(function (err, deletedBeverage) {
      res.json(deletedBeverage);
  });
} // end of deleteBeverage()


// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getTestItems: getTestItems,
  createTestItem: createTestItem,
};
