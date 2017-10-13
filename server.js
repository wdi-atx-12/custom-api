// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');

// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
app.get('/', function(req, res) {
  res.json({
    message: 'Hello, world!',
    type: 'greeting',
    time: new Date()
  });
});

const routes = require('./routes/routes');

// user routes
app.get('/users', routes.getUsers);
app.get('/users/:id', routes.getUserById);
app.post('/users', routes.createUser);
// app.put('/users/:id', routes.updateUserById);
app.delete('/users/:id', routes.deleteUserById);

// song routes
app.get('/songs', routes.getSongs);     // <-- this route will eventually be disabled
app.post('/songs', routes.createSong);  // to accommodate seeing all songs in a playlist
// app.put('/songs/:id', routes.updateSongById);
app.delete('/songs/:id', routes.deleteSongById);

// playlist routes
app.get('/playlists', routes.getPlaylists);
app.post('/playlists', routes.createPlaylist);
// update
app.delete('/playlists/:id', routes.deletePlaylistById);




// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
