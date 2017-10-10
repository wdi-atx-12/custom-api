const mongoose = require('mongoose');

const VenueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    default: ''
  },
  website: {
    type: String,
    default: ''
  },
  twentyOneAndUp: {
    type: Boolean,
    default: false
  }
});

const Venue = mongoose.model('Venue', VenueSchema);

module.exports = { Venue: Venue };
