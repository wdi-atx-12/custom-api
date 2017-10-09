const mongoose = require('mongoose');

const BandSchema = new mongoose.Schema({
  name: String,
  origin: String,
  genre: String,
  established: Number,
});

const Band = mongoose.model('Band', BandSchema);

module.exports = {
  Band: Band;
};
