
const mongoose = require('mongoose');

const RecipeBookSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
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
