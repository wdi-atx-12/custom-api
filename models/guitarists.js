const mongoose = require('mongoose');
const guitarsModels = require('./guitars');

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
  guitars: ['Guitars']
});

const Guitarist = mongoose.model('Guitarist', GuitaristSchema);

module.exports = {
  Guitarist: Guitarist
};
