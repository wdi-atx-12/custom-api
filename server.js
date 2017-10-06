// dependencies
const express = require('express');
const bodyParser = require('body-parser');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());


// app routes
// you can add route handlers directly in this file like this:
app.get('/', function(req, res) {
  res.json({
    custName: 'Greg Grazdan',
    howMany: 4,
    feedsUpTo: '60',
    price: 4000
  });
});

// or you can import route handlers from other files like this:
const testRoutes = require('./routes/newOrder');
app.get('/newOrder', testRoutes.getOrders);
app.post('/newOrder', testRoutes.createOrder);

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
