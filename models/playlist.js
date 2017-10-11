const mongoose = require('mongoose');
const user = require('./user');
const song = require('./song');

const PlaylistSchema = new mongoose.Schema({
  name: String,
  songs: [song.SongSchema], // REVIEW: array of songs, embedded
  tags: [{
    type: String,
    default: ""
  }],
  user: {                    // reference user that created playlist by ID
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = {
  Playlist: Playlist,
  PlaylistSchema: PlaylistSchema,
};
