

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

var sandwiches = [];

function getRandonNumber(start,end) {
	return Math.floor(Math.random()*(end)) + start;
}

function addToppingArray(arr) {
	var tmp = [];
	for (var i = 0; i < getRandonNumber(1,2); i++) {
		var sel = arr[getRandonNumber(0,arr.length)];
		if(tmp.indexOf(sel) === -1){

			tmp.push(sel.name);

		}
		else {
			i--;
		}
	}
	return tmp;
}
//
// addSeedData(db.Topping,meats,true);
// addSeedData(db.Topping,vegetables,false);
// addSeedData(db.Topping,cheeses,false);
// addSeedData(db.Topping,sauces,false);
// addSeedData(db.Topping,spices,false);

// console.log(f);
var breads = ["white", "wheat", "sourdough", "flatbread", "jalapeno cheddar"];

var sandwich = new db.Sandwich({
	breadType: breads[0],
	meats: addToppingArray(meats),
	vegetables: [],
	cheeses: [],
	sauces: [],
	spices: [],
	price: 3.99
});
//
// db.Sandwich.create(new db.Sandwich({}),(err, item) => {
//
// 	db.Topping.find({type: 'meat'},function(err, item){ //,
// 		if (err) { return console.log("++"+err); }
// 		meats = item;
// 	});
// 	db.Topping.find({type: 'vegetable'},function(err, item){ //,
// 		if (err) { return console.log("++"+err); }
// 		vegetables = item;
// 	db.Topping.populate(item, { path: 'name', select: 'id' }, (err, ids) => {
// 		console.log(ids);
// 	});
// 	});
// 	item.meats = meats;
// 	item.vegetables = vegetables;
// 	item.save();
//
//
// });


//{type: 'vegetable'}
var veg = db.Topping.find({type: 'vegetable'})
.select('_id')
.sort('-type')
.exec( (err, item) => {
  if (err) return handleError(err);
  console.log(item);

});


// db.Sandwich.remove({},(err, tItems) => {
// 	console.log('removed all sandwiches');
// 	for(var i = 0; i < breads.length; i++) {
// 		// sandwiches.push({
// 		// 	breadType: breads[i],
// 		// 	meats: addToppingArray(meats),
// 		// 	vegetables: addToppingArray(vegetables),
// 		// 	cheeses: addToppingArray(cheeses),
// 		// 	sauces: addToppingArray(sauces),
// 		// 	spices: addToppingArray(spices),
// 		// 	price: 3.99
// 		// });
// 		//
// 		// post.save(function(error) {
// 		//     if (!error) {
// 		//         Post.find({})
// 		//             .populate('postedBy')
// 		//             .populate('comments.postedBy')
// 		//             .exec(function(error, posts) {
// 		//                 console.log(JSON.stringify(posts, null, "\t"))
// 		//             })
// 		//     }
// 		// });
//
//
//
// 		var sandwich = new db.Sandwich({
// 			breadType: breads[i],
// 			meats: addToppingArray(meats),
// 			// vegetables: addToppingArray(vegetables),
// 			// cheeses: addToppingArray(cheeses),
// 			// sauces: addToppingArray(sauces),
// 			// spices: addToppingArray(spices),
// 			price: 3.99
// 		});
// 		db.Sandwich.create(sandwich,(err, item) => {
// 		//.findOne({ title: /Nintendo/i })
//
// 		//item.meats = addToppingArray(meats);
// 		console.log(item);
// 		// db.Topping.populate(item, { path: 'meats' }, (err, item) => {
// 		// 		console.log(item);
// 		// });
// 	});
//
// 	}
//
// });





//
// sandwiches.forEach((element) => {
// 	for(var i = 0; i < 199; i++) {}
//
// });



//
// addSeedData(db.Dessert,desserts,true);
// addSeedData(db.Beverage,drinks,true);
//
// addSeedData(db.Topping,meats,true);
// addSeedData(db.Topping,vegetables,false);
// addSeedData(db.Topping,cheeses,false);
// addSeedData(db.Topping,sauces,false);
// addSeedData(db.Topping,spices,false);

//process.exit();

"meats": "59da8318ad18350483f37e83","59da8318ad18350483f37e84"
"vegetables": "59da8318ad18350483f37e8e","59da8318ad18350483f37e8d"
"cheeses": "59da8318ad18350483f37e92"
"sauces": "59da8318ad18350483f37e99"
"spices": "59da8318ad18350483f37ea0"
/*
[ { _id: 59da8318ad18350483f37e8e, name: 'cucumber' },
  { _id: 59da8318ad18350483f37e90, name: 'olives' },
  { _id: 59da8318ad18350483f37e8f, name: 'pickles' },
  { _id: 59da8318ad18350483f37e8d, name: 'tomato' },
  { _id: 59da8318ad18350483f37e8c, name: 'spinach' },
  { _id: 59da8318ad18350483f37e8b, name: 'lettuce' },

  { _id: 59da8318ad18350483f37ea3, name: 'pepper' },
  { _id: 59da8318ad18350483f37ea2, name: 'salt' },
  { _id: 59da8318ad18350483f37ea1, name: 'paprika' },
  { _id: 59da8318ad18350483f37e9f, name: 'oregano' },
  { _id: 59da8318ad18350483f37ea0, name: 'red pepper flakes' },

  { _id: 59da8318ad18350483f37e99, name: 'ranch' },
  { _id: 59da8318ad18350483f37e97, name: 'mayo' },
  { _id: 59da8318ad18350483f37e9b, name: 'spicy mustard' },
  { _id: 59da8318ad18350483f37e9e, name: 'red wine vinegar' },
  { _id: 59da8318ad18350483f37e9d, name: 'olive oil' },
  { _id: 59da8318ad18350483f37e9c, name: 'creamy sriracha' },
  { _id: 59da8318ad18350483f37e9a, name: 'mustard' },
  { _id: 59da8318ad18350483f37e98, name: 'thousand island' },

  { _id: 59da8318ad18350483f37e89, name: 'tuna' },
  { _id: 59da8318ad18350483f37e88, name: 'pepperoni' },
  { _id: 59da8318ad18350483f37e8a, name: 'veggie patti' },
  { _id: 59da8318ad18350483f37e87, name: 'salami' },
  { _id: 59da8318ad18350483f37e85, name: 'roast beef' },
  { _id: 59da8318ad18350483f37e84, name: 'honey ham' },
  { _id: 59da8318ad18350483f37e86, name: 'tuna' },
  { _id: 59da8318ad18350483f37e83, name: 'turkey breast' },

  { _id: 59da8318ad18350483f37e96, name: 'mozzarella' },
  { _id: 59da8318ad18350483f37e93, name: 'swiss' },
  { _id: 59da8318ad18350483f37e92, name: 'provolone' },
  { _id: 59da8318ad18350483f37e91, name: 'american' },
  { _id: 59da8318ad18350483f37e94, name: 'pepperjack' },
  { _id: 59da8318ad18350483f37e95, name: 'cheddar' } ]
