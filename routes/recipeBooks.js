const db = require('../models');


//get all recipe books
function getRecipeBook(req, res){
  db.RecipeBook.find()
    .populate('recipes')
    .exec(function(err,recipeBooks){
      if(err){
        return console.log("Index error: "+err);
      }
      console.log("Got all recipe books!");
      res.json(recipeBooks);
    })
};

//get one recipe book
function getOneRecipeBook(req,res){
  const recipeBookId = req.params.id;
  db.RecipeBook.findOne({_id: recipeBookId})
  .populate('recipes')
  .exec(function(err, foundRecipeBook){
    if(err){
      return console.log("Index error: "+err);
    }
    console.log("Got One Recipe book!")
    res.json(foundRecipeBook);
  })
};
// function function(req, res){
//   const recipeId = req.params.recipe.id;
//   db.Recipe.findOne({_id: recipeId}, function(err, foundRecipe){
//     res.json(foundRecipe);
//   })
// });
// create new recipe book
function createNewRecipeBook(req,res){
  var newRecipeBook = new db.RecipeBook({
    name: req.body.name,
    user: req.body.user
  });
  db.Recipe.findOne({recipeBook: req.body.recipes}, function(err, recipes){
    newRecipeBook.recipes = recipes;
    newRecipeBook.save(function(err, recipeBook){
      if(err){
        return console.log("create error: " + err);
      }
      console.log("created: ", recipeBook.name);
      res.json(recipeBook)
    });
  });
};

//update book
function updateRecipeBook(req,res){
  var recipeBookId = req.params.id;
  // var newRecipeBook = {
  //   name: req.body.name,
  //   user: req.body.user
  // };
  var newRecipeBook = req.body;
  db.RecipeBook.findByIdAndUpdate({_id: recipeBookId}, newRecipeBook, {new: true}, function(err, updatedRecipeBook){
    res.json(updatedRecipeBook);
  })
};

//delete book
function deleteRecipeBook(req,res){
  var recipeBookId = req.params.id;
  db.RecipeBook.findOneAndRemove({_id: recipeBookId}, function(err, removedBook){
    res.json(removedBook)
  })
};


//exports
module.exports = {
  getRecipeBook: getRecipeBook,
  getOneRecipeBook: getOneRecipeBook,
  createNewRecipeBook: createNewRecipeBook,
  updateRecipeBook: updateRecipeBook,
  deleteRecipeBook: deleteRecipeBook
}
