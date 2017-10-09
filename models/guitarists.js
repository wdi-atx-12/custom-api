const mongoose = require('mongoose');
//const guitarsModels = require('./guitars');

const GuitaristSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 42
  },
  dateStarted: {
    type: Date,
    default: Date.now
  },
  playStyle: {
    type: String,
    default: ''
  },
  guitars: [{
        name: {
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
  }]

});

const Guitarist = mongoose.model('Guitarist', GuitaristSchema);

module.exports = {
  Guitarist: Guitarist
};
