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

////////////////////
//  ROUTES
///////////////////

// define a root route: localhost:3000/
app.get('/', function (req, res) {
	res.sendFile('views/index.html' , { root : __dirname});
});



var beverageRouteBase = '/api/beverages';
var endpoints = {
	"selectAllBeverages": {base: beverageRouteBase, action: 'get', 		route: "", 		params: []},
	"selectBeverage"	: {base: beverageRouteBase, action: 'get', 		route: "/:<>", 	params: ["id"]},
	"insertBeverage"	: {base: beverageRouteBase, action: 'post', 	route: "", 		params: []},
	"updateBeverage"	: {base: beverageRouteBase, action: 'put', 		route: "/:<>", 	params: ["id"]},
	"deleteBeverage"	: {base: beverageRouteBase, action: 'delete',	route: "/:<>", 	params: ["id"]}
};

var createRouteString = function(key, actions) {
	var rt = `${actions[key].route}`.split("<>");
	var str = actions[key].base;
	if(rt.length === actions[key].params.length+1) {
		for(var i = 0; i < rt.length - 1; i++) {
			str += rt[i]+actions[key].params[i];
		}
	}
	return str;
}

const beverageRoutes = require('./routes/beverage');

for(var key in endpoints) {
	eval(`var func = ${key}`);
	var endpoint = endpoints[key];
	//ar func = new Function(`func = ${key}`);
	var e= eval(`app.${endpoint.action}('${createRouteString(key,endpoints)}',${beverageRoutes}.${key});`);

	console.log(createRouteString(key,endpoints));
	console.log(`Calling endpoint: ${key}(): ${endpoint.action} : ${e}`);
} // end of for apiFoods[key]














// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
