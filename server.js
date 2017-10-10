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
const sandwichRoutes = require('./routes/sandwichs');
const sandwichMenuRoutes = require('./routes/sandwichmenus');

const orderRoutes = require('./routes/orders');



////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get('/', function (req, res) {
	res.sendFile('views/index.html' , { root : __dirname});
});

var routeRoot = "/api";
var bases = ["beverage","topping","dessert","sandwich","sandwichMenu","order"];
var endpoints = {
	"selectAllItems": {base: "", action: 'get', 	route: "", 		params: []},
	"selectItem"	: {base: "", action: 'get', 	route: "/:<>", 	params: ["id"]},
	"insertItem"	: {base: "", action: 'post', 	route: "", 		params: []},
	"updateItem"	: {base: "", action: 'put', 	route: "/:<>", 	params: ["id"]},
	"deleteItem"	: {base: "", action: 'delete',	route: "/:<>", 	params: ["id"]}
};

var createRouteString = function(endpoint) {
	var rt = `${endpoint.route}`.split("<>");
	var str = `${routeRoot}/${endpoint.base}s`;
	if(rt.length === endpoint.params.length+1) {
		for(var i = 0; i < rt.length - 1; i++) {
			str += rt[i]+endpoint.params[i];
		}
	}
	return str;
}//end of createRouteString()

for (var i =0; i < bases.length; i++) {
	for(var key in endpoints) {
		var endpoint = endpoints[key];
		endpoint.base = bases[i];
		var routeStr = createRouteString(endpoint);
		eval(`app.${endpoint.action}('${routeStr}',${endpoint.base}Routes.${key});`);

		console.log(`Checking endpoint: ${routeStr} => ${key}()`);

	} // end of for endpoint[key]

}// end of for(i)


// start app
app.listen(port, function(err) {
	if (err) {
		console.log(`Error starting server on port ${port}`, err);
	} else {
		console.log(`Server running on port ${port}.`);
	}
});
