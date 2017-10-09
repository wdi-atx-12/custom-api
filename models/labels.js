const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: String,
  established: Number,
  bands: String,
  // {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Band'
  // },
  genre: String
});

const Label = mongoose.model('Label', LabelSchema);

module.exports = {
  Label: Label
};
