const mongoose = require('mongoose');



const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  imageUrl: {
    type: String,
    default: ""
  },
  tags: [{
    type: String,
    default: ""
  }],

});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = {
  Album: Album,
};
