const mongoose = require('mongoose');
const playlist = require('./playlist');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  displayName: String,
  artist: Boolean,                //default: false
  playlist: [{                    //REVIEW: array of playlists, referenced
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Playlist'
  }]
})

const User = mongoose.model('User', UserSchema);

module.exports = {
  User: User,
  UserSchema: UserSchema,
};
