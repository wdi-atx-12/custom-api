var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EntreeSchema = new Schema ({
  name: String,
  sides: String,
  ingredients: String,
  glutenFree: Boolean,
  price: String
});

var Entrees = mongoose.model('Entree', EntreeSchema);

module.exports = Entrees;
