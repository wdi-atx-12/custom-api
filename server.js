// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// you can add route handlers directly in this file like this:
app.get('/', function(req, res) {
  res.json({
    message: 'Hello, world!',
    type: 'greeting',
    time: new Date()
  });
});



// or you can import route handlers from other files like this:

const vehiclesRoutes = require('./routes/vehicles');
app.get('/vehicles', vehiclesRoutes.getVehicleItems);
app.post('/vehicles', vehiclesRoutes.createVehicleItem);
app.get('/vehicles/:id', vehiclesRoutes.getOneVehicle);
app.delete('/vehicles/:id', vehiclesRoutes.deleteOneVehicle);



// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
