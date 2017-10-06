const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  location: {
    type: String,
    unique: true,
    required: true
  },
  pokemon: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pokemon'
  }],
});

const TrainerData = mongoose.model('TrainerData', trainerSchema);

module.exports = {
  TrainerData: TrainerData,
};
