const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    default: ''
  },
  upcomingShows: {
    type: Array,
    default: []
  },
  website: {
    type: String,
    default: ''
  }
});

const Band = mongoose.model('Band', BandSchema);

module.exports = {
  Band: Band
}
