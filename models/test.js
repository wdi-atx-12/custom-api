const mongoose = require('mongoose');  //dependency does the heavier lifting to do the stuff on this page

const TestSchema = new mongoose.Schema({   //2 how does my data look/get stored as a variable
  name: {
    type: String,
    required: cltrue
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

const Test = mongoose.model('Test', TestSchema); // lets make a model a thing

module.exports = {  // lets export that model
  Test: Test
}
