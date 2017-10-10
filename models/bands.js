const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BandSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: true
  },
  established: {
    type: Number,
    default: ""},
  hometown: {
    type: String,
    default: ""
  },
  label:
    {
      type: Schema.Types.ObjectId,
      ref: 'Label',
      // default: ""
    },
  genre: {
    type: String,
    default: ""
  }
});

const Band = mongoose.model('Band', BandSchema);

module.exports = {
  Band: Band
};
