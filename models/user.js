const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  }
  displayName: String,
  artist: Boolean,
  Playlist: [PlaylistSchema] //REVIEW: array of playlists, referenced
})

const User = mongoose.model('User', UserSchema);

module.exports = {User: User};
