const mongoose = require('mongoose');

var composersSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      country: {
        type: String,
        default: ''
      },
      birth: {
        type: Number,
        default: ''
      },
      death: {
        type: Number,
        defualt: ''
      },
      eras: {
        type: Array,
      },
    })

var Composers = mongoose.model('Composers', composersSchema);
module.exports = {
  Composers: Composers
}
