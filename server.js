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
// const testRoutes = require('./routes/test');
// app.get('/test', testRoutes.getTestItems);
// app.post('/test', testRoutes.createTestItem);

const routes = require('./routes/routes');
app.get('/users', routes.getUsers);
app.get('/users/:id', routes.getUserById);
app.get('/songs', routes.getSongs);


// get all playlists
app.get('/playlists', function(req, res) {
  db.Playlist.find({}, function (err, data){
    if (err) {
      console.log("error retrieving playlists from db", err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
});

// create new user
app.post('/users', function(req, res) {
  var username = req.body.username;
  var displayName = req.body.displayName;
  var artist = req.body.artist;
  var playlists = req.body.playlist;

  var newUser = new db.User({
    username: username,
    displayName: displayName,
    artist: artist,
    playlists: playlists
  });

  newUser.save(function(err, newUser){
    res.send('user created')
  });
})
// create new song
// create new playlist

// update

// delete user by ID, (TODO: make it work)
app.delete('/users/:id', function (req, res) {
  var userID = req.params.id;
  db.User.findOneAndRemove({_id: userID}, function (err, deletedUser){
    res.json(deletedUser);
  })
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