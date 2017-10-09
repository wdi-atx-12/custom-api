const mongoose = require('mongoose');

var eraSchema = new mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },
  dates: {
    type: String,
    default: ''
  },
  noteableComposers: {
    type: String,
    default: ''
  },
  stylisticElements: {
    type: String,
    default: ''
  }
});

var Era = mongoose.model('Era', eraSchema);
module.exports = {
  Era: Era
}

// var composersSchema = new Schema({
//   name: 'string',
//   country: 'string',
//   birth: number,
//   death: number,
//   era: 'string'
// })


