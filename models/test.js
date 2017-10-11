const mongoose = require('mongoose');
console.log('test model running');

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    default: 42
  },
  time: {
    type: Date,
    default: Date.now
  }
});

const Test = mongoose.model('Test', TestSchema);

module.exports = {
  Test: Test
}
