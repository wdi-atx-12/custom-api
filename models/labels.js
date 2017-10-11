const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LabelSchema = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
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
  bands:
    [{
      type: Schema.Types.ObjectId,
      ref: 'Band',
      // default: ""
    }],
  genre: {
    type: String,
    default: ""
  }
});

const Label = mongoose.model('Label', LabelSchema);

module.exports = {
  Label: Label
};
