// dependencies
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// you can add route handlers directly in this file like this:
app.get('/', function(req, res) {
  res.json({
    message: 'Welcome to my UFC API',
    type: 'greeting',
    time: new Date()
  });
});
// or you can import route handlers from other files like this:
const testRoutes = require('./routes/test');
//get all fighter
app.get('/fighters', testRoutes.getFighterInfo);
//get fighter by id
app.get('/fighters/:id', testRoutes.getOneFighter);
//create new fighter
app.post('/fighters', testRoutes.createFighterEntree);
//update fighter's info
app.put('/fighters/:id', testRoutes.updateFighterInfo);
//delete fighter
app.delete('/fighters/:id', testRoutes.removeFighter);


// TODO: delete the above dummy routes and add your actual routes

// start app
// app.listen(process.env.PORT || 3000)
//
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
