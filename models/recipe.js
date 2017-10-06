const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  description: {
    type: String,
    default: ""
  },
   imageUrl: {
    type: String,
    default: ""
  },
  ingredients: [{
    type: String,
    default: ""
  }],
  instructions: {
    type: String,
    default: ""
  },
  tags: [{
    type: String,
    default: ""
  }]
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
  Recipe: Recipe
}
