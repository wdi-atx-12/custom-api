// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// // you can add route handlers directly in this file like this:
// app.get('/', function(req, res) {
//   res.json({
//     message: 'Hello, world!',
//     type: 'greeting',
//     time: new Date()
//   });
// });
// // or you can import route handlers from other files like this:
// const testRoutes = require('./routes/test');
// app.get('/test', testRoutes.getTestItems);
// app.post('/test', testRoutes.createTestItem);
//
// // TODO: delete the above dummy routes and add your actual routes



const beverageRoutes = require('./routes/beverages');
const toppingRoutes = require('./routes/toppings');
const dessertRoutes = require('./routes/desserts');
//const sandwichRoutes = require('./routes/sandwiches');
//const sandwichMenuRoutes = require('./routes/sandwichMenu');



////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get('/', function (req, res) {
	res.sendFile('views/index.html' , { root : __dirname});
});

var routeRoot = "/api";
var bases = ["beverage","topping","dessert"];
var endpoints = {
	"selectAllItems": {base: "", action: 'get', 	route: "", 		params: []},
	"selectItem"	: {base: "", action: 'get', 	route: "/:<>", 	params: ["id"]},
	"insertItem"	: {base: "", action: 'post', 	route: "", 		params: []},
	"updateItem"	: {base: "", action: 'put', 	route: "/:<>", 	params: ["id"]},
	"deleteItem"	: {base: "", action: 'delete',	route: "/:<>", 	params: ["id"]}
};

var createRouteString = function(key, actions) {
	var rt = `${actions[key].route}`.split("<>");
	var str = `${routeRoot}/${actions[key].base}s`;
	if(rt.length === actions[key].params.length+1) {
		for(var i = 0; i < rt.length - 1; i++) {
			str += rt[i]+actions[key].params[i];
		}
	}
	return str;
}//end of createRouteString()

for (var i =0; i < bases.length; i++) {
	for(var key in endpoints) {
		endpoints[key].base = bases[i];
		var endpoint = endpoints[key];
		var routeStr = createRouteString(key,endpoints);
		var e= eval(`app.${endpoint.action}('${routeStr}',${endpoint.base}Routes.${key});`);

		console.log(routeStr);
		console.log(`Calling endpoint: ${key}(): ${endpoint}`);
	} // end of for apiFoods[key]
}


// start app
app.listen(port, function(err) {
	if (err) {
		console.log(`Error starting server on port ${port}`, err);
	} else {
		console.log(`Server running on port ${port}.`);
	}
});
