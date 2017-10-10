
const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
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
  // recipeBook: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "RecipeBook"
  // }
});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = {
  Recipe: Recipe
}
