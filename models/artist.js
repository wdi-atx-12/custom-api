const mongoose = require('mongoose');  //dependency does the heavier lifting to do the stuff on this page

const ArtistSchema = new mongoose.Schema({
  userName: { type: String, require: true, unique: true },
  firstName: String,
  lastName: String,
  email: { type: String, require: true, unique: true },
  city: String,
  bio: String
  // Artworks: [{
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Art'
  // }]
})


// const ArtistSchema = new mongoose.Schema({   //2 how does my data look/get stored as a variable
//   name: {
//     type: String,
//     required: cltrue
//   },
//   count: {
//     type: Number,
//     default: 42
//   },
//   time: {
//     type: Date,
//     default: Date.now
//   }
// });

const Artist = mongoose.model('Artist', ArtistSchema); // lets make a model a thing

module.exports = {  // lets export that model
  Artist: Artist
}
