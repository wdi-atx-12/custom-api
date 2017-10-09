const mongoose = require('mongoose');

const GuitarsSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: ''
  },
  make: {
    type: String,
    default: ''
  },
  model: {
    type: String,
    default: ''
  },
  year: {
    type: Number,
    default: 27
  },
  origin: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: ''
  },
  neckThrough: {
    type: Boolean,
    default: false
  },
  price: {
    type: Number,
    default: 500
  }

});

const Guitars = mongoose.model('Guitars', GuitarsSchema);

module.exports = {
  Guitars: Guitars
};
