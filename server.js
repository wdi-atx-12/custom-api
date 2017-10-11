// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const models = require('./models');

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

const bandRoutes = require('./routes/bands');
//get all
app.get('/bands', bandRoutes.getAllBands);
//create one
app.post('/bands', bandRoutes.createNewBand);
//find one by ID
app.get('/bands/:band_id', bandRoutes.bandById);
//update existing
app.put('/bands/:band_id', bandRoutes.updateBandById);
//delete record
app.delete('/bands/:band_id', bandRoutes.deleteBandById);

const labelRoutes = require('./routes/labels');
//get all
app.get('/labels', labelRoutes.getAllLabels);
//create one
app.post('/labels', labelRoutes.createNewLabel);
//find one by ID
app.get('/labels/:label_id', labelRoutes.labelById);
//update existing
app.put('/labels/:label_id', labelRoutes.updateLabelById);
//delete record
app.delete('/labels/:label_id', labelRoutes.deleteLabelById);

// or you can import route handlers from other files like this:
const testRoutes = require('./routes/test');
app.get('/test', testRoutes.getTestItems);
app.post('/test', testRoutes.createTestItem);

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
