const db = require('../models');

function getRecipes(req, res){
  db.Recipe.find({}, function(err, data){
    if(err){
    res.status(500).send('Error retrieving data.');
    }else{
    res.json(data);
    }
  });
}

function createRecipe(req, res){
  var newRecipe = new db.Recipe({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    tags: req.body.tags
  });
  newRecipe.save(function(err,newRecipe){
    if(err){
      return console.log("create error: "+ err);
    }
    console.log("created ", newRecipe.name);
    res.json(newRecipe);
  });
};

function getOneRecipe(req, res){
  var recipeId = req.params.id;
  db.Recipe.findOne({_id: recipeId}, function(err, foundRecipe){
    res.json(foundRecipe);
  })
};

function updateRecipe(req,res){
  var recipeId = req.params.id;
  var newRecipe = {
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    tags: req.body.tags
  };
  db.Recipe.findByIdAndUpdate(recipeId, newRecipe, {new: true}, function(err, updatedRecipe){
    res.json(updatedRecipe);
  });
};

function deleteRecipe(req,res){
  var recipeId = req.params.idl
  db.Recipe.findOneAndRemove({_id: recipeId}, function(err, removedRecipe){
    res.json(removedRecipe)
  })
};

module.exports = {
  getRecipes: getRecipes,
  createRecipe: createRecipe,
  getOneRecipe: getOneRecipe,
  updateRecipe: updateRecipe,
  deleteRecipe:deleteRecipe
}
