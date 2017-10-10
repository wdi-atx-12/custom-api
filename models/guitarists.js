const mongoose = require('mongoose');
//const guitarsModels = require('./guitars');

const GuitaristSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: String,
    default: '42'
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
          type: String,
          default: "1969"
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
