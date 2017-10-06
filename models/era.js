const mongoose = require('mongoose');

var eraSchema = new mongoose.Schema(
{
  name: String,
  dates: String,
  noteableComposers: String,
  stylisticElements: String
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


