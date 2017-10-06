const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeBookSchema = new Schema({
  recipes: {
    type: Schema.Types.ObjectId,
    ref: "Recipe"
  },
  user: {
    type: String,
    default: ""
  }
});

const RecipeBook = mongoose.model("RecipeBook", RecipeBookSchema);

module.exports = {
  RecipeBook: RecipeBook
};
