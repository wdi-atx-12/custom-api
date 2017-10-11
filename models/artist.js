const mongoose = require('mongoose');  //dependency does the heavier lifting to do the stuff on this page

const ArtistSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    portraitImg: String,
    hometown: String,
    bio: String,
    artwork: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artwork',
      default: 'noart' }]
});

const Artist = mongoose.model('Artist', ArtistSchema); // lets make a model a thing

module.exports = {  // lets export that model
  Artist: Artist
}
