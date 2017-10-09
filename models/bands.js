const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BandSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  established: Number,
  hometown: String,
  label: String,
  // {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Label'
  // },
  genre: String
});

const Band = mongoose.model('Band', BandSchema);

module.exports = {
  Band: Band
};
