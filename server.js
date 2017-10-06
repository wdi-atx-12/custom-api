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
const testRoutes = require('./routes/test');
app.get('/test', testRoutes.getTestItems);
app.post('/test', testRoutes.createTestItem);

// const routes = require('./routes/routes');
// app.get('/users', routes.getUsers);
// app.get('/songs', routes.getSongs);

// get all users
app.get('/users', function(req, res) {
  db.User.find({}, function (err, data){
    if (err) {
      console.log("error retrieving users from db", err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
});

// get all songs
app.get('/songs', function(req, res) {
  db.Song.find({}, function (err, data){
    if (err) {
      console.log("error retrieving songs from db", err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
});

// TODO: delete the above dummy routes and add your actual routes

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
