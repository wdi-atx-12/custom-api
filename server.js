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

app.get('/vehicles', function(req, res) {
  res.json({
    message: 'Hello, world!',
    type: 'greeting',
    time: new Date()
  });
});

app.get('/vehicles', function(req, res){
  db.Vehicles.find({}, function(err, data){
    if(err) {
      //TODO: handle database error
      res.status(500).send('Error retrieving data.');
    }else{
      //TODO: respond with database data
      // res.send('hello world'); // as plain text or HTML
      // res.render(); // send HTML from a template
      res.json(data); // send an object converted to JSON
    }
  })
})


// or you can import route handlers from other files like this:
const testRoutes = require('./routes/test');
app.get('/test', testRoutes.getTestItems);
app.post('/test', testRoutes.createTestItem);
const vehiclesRoutes = require('./routes/vehicles');
app.get('/vehicles', vehiclesRoutes.getVehicleItems);
app.post('/vehicles', vehiclesRoutes.createVehicleItem);

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
