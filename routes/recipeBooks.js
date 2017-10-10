const db = require('../models');


//get all recipe books
function getRecipeBook(req, res){
  db.RecipeBook.find()
    .populate('recipe')
    .exec(function(err,recipeBooks){
      if(err){
        return console.log("Index error: "+err);
      }
      console.log("Got all recipes!");
      res.json(recipeBooks);
    })
};

//get one recipe book
function getOneRecipeBook(req,res){
  const recipeBookId = req.params.id;
  db.RecipeBook.findOne({_id: recipeBookId}, function(err, foundRecipeBook){
    res.json(foundRecipeBook);
  })
};
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
  var newRecipeBook = {
    name: req.body.name,
    user: req.body.user
  };
  db.RecipeBook.findByIdAndUpdate(recipeBookId, newRecipeBook, {return: true}, function(err, updatedRecipeBook){
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
