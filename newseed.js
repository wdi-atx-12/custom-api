

var db = require('./models');




function addSeedData(schema,list,emptyBeforeAdd) {

	if(emptyBeforeAdd) {
		schema.remove({}, function(err, listItems){
			if(err) {
				console.log('Error occurred in remove', err);
			} else {
				console.log('removed all items');
			}
		});
	}
	// create new records based on the array items
	schema.create(list, function(err, listItems){
		if (err) { return console.log('err', err); }
		console.log("created", listItems.length, "listItems");

	});
}

var desserts = [
	{name: "chocolate chip cookie",price: 0.99},
	{name: "white chocolate macadamia nut cookie",price: 0.99},
	{name: "raspberry cheesecake cookie",price: 0.99},
	{name: "sugar cookie",price: 0.99},
	{name: "apples",price: 0.99},
	{name: "oatmeal cookie",price: 0.99}
];

var drinks = [
	{name: "coke",price: 0.99},
	{name: "sprite",price: 0.99},
	{name: "dr. pepper",price: 0.99},
	{name: "fruit punch",price: 0.99},
	{name: "tea",price: 1.99},
	{name: "coffee",price: 1.99},
	{name: "bottled water",price: 1.99},
	{name: "soda water",price: 0.00},
	{name: "water",price: 0.00}
];

var meats = [
	{name: "turkey breast", type: "meat"},
	{name: "honey ham", type: "meat"},
	{name: "roast beef", type: "meat"},
	{name: "tuna", type: "meat"},
	{name: "salami", type: "meat"},
	{name: "pepperoni", type: "meat"},
	{name: "tuna", type: "meat"},
	{name: "veggie patti", type: "meat"}
];

var vegetables = [
	{name: "lettuce", type: "vegetable"},
	{name: "spinach", type: "vegetable"},
	{name: "tomato", type: "vegetable"},
	{name: "cucumber", type: "vegetable"},
	{name: "pickles", type: "vegetable"},
	{name: "olives", type: "vegetable"}
];

var cheeses = [
	{name: "american",type: "cheese"},
	{name: "provolone", type: "cheese"},
	{name: "swiss", type: "cheese"},
	{name: "pepperjack", type: "cheese"},
	{name: "cheddar", type: "cheese"},
	{name: "mozzarella", type: "cheese"}
];

var sauces = [
	{name: "mayo", type: "sauce"},
	{name: "thousand island", type: "sauce"},
	{name: "ranch", type: "sauce"},
	{name: "mustard", type: "sauce"},
	{name: "spicy mustard", type: "sauce"},
	{name: "creamy sriracha", type: "sauce"},
	{name: "olive oil", type: "sauce"},
	{name: "red wine vinegar", type: "sauce"}
];

var spices = [
	{name: "oregano", type: "spice"},
	{name: "red pepper flakes", type: "spice"},
	{name: "paprika", type: "spice"},
	{name: "salt", type: "spice"},
	{name: "pepper", type: "spice"}
];


addSeedData(db.Dessert,drinks,true);
addSeedData(db.Beverage,drinks,true);

addSeedData(db.Topping,meats,true);
addSeedData(db.Topping,vegetables,false);
addSeedData(db.Topping,cheeses,false);
addSeedData(db.Topping,sauces,false);
addSeedData(db.Topping,spices,false);

process.exit();
