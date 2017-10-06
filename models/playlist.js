const mongoose = require('mongoose');

const PlaylistSchema = new mongoose.Schema({
  name: String,
  songs: [SongSchema] // REVIEW: array of songs, embedded
})

const Playlist = mongoose.model('Playlist', PlaylistSchema);

module.exports = {Playlist: Playlist};
