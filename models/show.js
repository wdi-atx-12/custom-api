const mongoose = require('mongoose');

const ShowSchema = new mongoose.Schema({
  bands: {
    type: Array,
    default: []
  },
  date: {
    type: Date,
    required: true
  },
  venue: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  coverCharge: {
    type: Number,
    default: 0
  }

});

const Show = mongoose.model('Show', ShowSchema);

module.exports = { Show: Show };
