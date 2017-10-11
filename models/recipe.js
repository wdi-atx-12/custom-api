
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  ingredients: [{
    type: String,
    default: ""
  }],
  instructions: String,
  tags: [{
    type: String,
    default: ""
  }]
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
  Recipe: Recipe
}
