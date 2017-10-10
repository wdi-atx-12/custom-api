const mongoose = require('mongoose');
// const Schema = mongoose.Schema();

const BandSchema = new mongoose.Schema({
  name: String,
  origin: String,
  genre: String,
  established: Date
});

const Band = mongoose.model('Band', BandSchema);

module.exports = {
  Band: Band
}
