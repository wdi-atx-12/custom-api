const mongoose = require('mongoose');
const song = require('./song');

const PlaylistSchema = new mongoose.Schema({
  name: String,
  songs: [song.SongSchema], // REVIEW: array of songs, embedded
  tags: [{
    type: String,
    default: ""
  }]
})

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = {
  Playlist: Playlist,
  PlaylistSchema: PlaylistSchema,
};
