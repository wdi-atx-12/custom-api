
const mongoose = require('mongoose');

const RecipeBookSchema = new mongoose.Schema({
  name: String,
  user: String,
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
});

const RecipeBook = mongoose.model("RecipeBook", RecipeBookSchema);

module.exports = {
  RecipeBook: RecipeBook
};
