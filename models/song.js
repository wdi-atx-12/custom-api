const mongoose = require('mongoose');

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
  user: { //referenced
    //userID
  }
})

const Song = mongoose.model('Song', SongSchema);

module.exports = {Song: Song};
