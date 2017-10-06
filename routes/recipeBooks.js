const db = require('..models');

//get all recipe books
function getRecipeBook(req, res){
  db.RecipeBook.find()
    .populate('Recipe')
    .exec(function(err,recipeBooks){
      if(err){ return console.log("Index error: "+err);}
      res.json(recipeBooks);
    })
};

//get one recipe book


//create new recipe book
// function createRecipeBook(req,res){
//   var newRecipeBook = new db.RecipeBook({
//     recipes: [{
//       type: Schema.Types.ObjectId,
//       ref: "Recipe"
//     }],
//   user: req.body.user
//   })
// }

//update book


//delete book


//exports
module.exports = {
  getRecipeBook: getRecipeBook
}
