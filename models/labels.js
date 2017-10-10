const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  location: {
    type: String,
    default: ""
  },
  established: {
    type: Number,
    default: ""
  },
  bands: String,
    // [{
    //   type: Schema.Types.ObjectId,
    //   ref: 'Band'
    // }],
  genre: {
    type: String,
    default: ""
  }
});

const Label = mongoose.model('Label', LabelSchema);

module.exports = {
  Label: Label
};
