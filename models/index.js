const mongoose = require('mongoose');
require('dotenv').config();

// require use of individual files from models folder
// include all model files
const user = require('./user');
const playlist = require('./playlist');
const song = require('./song');

const testModels = require('./test');

// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {
  // add references to all models
  User: user.User,
  Playlist: playlist.Playlist,
  Song: song.Song,
  Test: testModels.Test
};
