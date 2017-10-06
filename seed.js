// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var list = [
	{
		name: "Mama Fus Broccoli Beef",
		imageUrl: "placeholder.png",
		tags: ["Chinese", "Beef"],
		nutritionInfo: {
			servingSizeAmount: 10,
			servingSizeUnit: "oz",
			servingSizeDescription: "big portion",
			calories: 100,
			totalFat: 10,
			sodium: 120,
			sugar: 5,
			protein: 6,
			fiber: 2
		}
	},
	{
		name: "Pho King Chicken Pho",
		imageUrl: "placeholder.png",
		tags: ["Vietnamese", "Chicken", "Pho"],
		nutritionInfo: {
			servingSizeAmount: 20,
			servingSizeUnit: "oz",
			servingSizeDescription: "big portion",
			calories: 200,
			totalFat: 15,
			sodium: 220,
			sugar: 4,
			protein: 2,
			fiber: 1
		}
	},
	{
		name: "Raw Broccoli",
		imageUrl: "placeholder.png",
		tags: ["Raw", "Broccoli", "Vegetable"],
		nutritionInfo: {
			servingSizeAmount: 10,
			servingSizeUnit: "oz",
			servingSizeDescription: "small portion",
			calories: 100,
			totalFat: 10,
			sodium: 120,
			sugar: 5,
			protein: 6,
			fiber: 2
		}
 	},
	// {
	// 	name: "Broccoli Beef",
	// 	imageUrl: "placeholder",
	// 	tags: [{"Chinese", "Beef"}],
	// 	NutritionInfo: {
	// 		servingSizeAmount: 10,
	// 		servingSizeUnit: "oz",
	// 		servingSizeDescription: "big portion",
	// 		calories: 100,
	// 		totalFat: 10,
	// 		sodium: 120,
	// 		sugar: 5,
	// 		protein: 6,
	// 		fiber: 2
	// 	}
	// }
];



var authors_list = [
  {
    name: "Harper Lee",
    alive: false
  },
  {
    name: "F Scott Fitzgerald",
    alive: false
  },
  {
    name: "Victor Hugo",
    alive: false
  },
  {
    name: "Jules Verne",
    alive: false
  },
  {
    name: "Sheryl Sandberg",
    alive: true
  },
  {
    name: "Tim Ferriss",
    alive: true
  },
  {
    name: "John Steinbeck",
    alive: false
  },
  {
    name: "William Shakespeare",
    alive: false
  }
];
db.Food.remove({}, function(err, listItems){
	if(err) {
		console.log('Error occurred in remove', err);
	} else {
		console.log('removed all ingredients');

		// create new records based on the array ingredient_list
		db.Food.create(list, function(err, listItems){
			if (err) { return console.log('err', err); }
			console.log("created", listItems.length, "listItems");
			process.exit();
		});
	}
});


//
// db.Author.remove({}, function(err, authors) {
// 	console.log('removed all authors');
// 	db.Author.create(authors_list, function(err, authors){
// 		if (err) {
// 			console.log(err);
// 			return;
// 		}
// 		console.log('recreated all authors');
// 		console.log("created", authors.length, "authors");
//
//
// 		db.Book.remove({}, function(err, books){
// 			console.log('removed all books');
// 			books_list.forEach(function (bookData) {
// 				var book = new db.Book({
// 					title: bookData.title,
// 					image: bookData.image,
// 					releaseDate: bookData.releaseDate
// 				});
// 				db.Author.findOne({name: bookData.author}, function (err, foundAuthor) {
// 					console.log('found author ' + foundAuthor.name + ' for book ' + book.title);
// 					if (err) {
// 						console.log(err);
// 						return;
// 					}
// 					book.author = foundAuthor;
// 					book.save(function(err, savedBook){
// 						if (err) {
// 							return console.log(err);
// 						}
// 						console.log('saved ' + savedBook.title + ' by ' + foundAuthor.name);
// 					});
// 				});
// 			});
// 		});
//
// 	});
// });
