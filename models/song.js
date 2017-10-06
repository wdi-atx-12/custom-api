const mongoose = require('mongoose');
const user = require('./user');

const SongSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  url: String, //not required but recommended
  user: {                    // reference user that added song by ID
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

const Song = mongoose.model('Song', SongSchema);

module.exports = {
  Song: Song,
  SongSchema: SongSchema,
};
