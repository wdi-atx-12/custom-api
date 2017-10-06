// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
// you can add route handlers directly in this file like this:
app.get('/', function(req,res){
  res.send('hello world');
});

//get all recipes
app.get('/recipe', function(req,res){
  db.Recipe.find({}, function(err, data){
    if(err){
    res.status(500).send('Error retrieving data.');
    }else{
    res.json(data);
    }
  });
});

//post/create new recipe
app.post('/recipe', function(req,res){
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
});

//get one recipe by ID
app.get('/recipe/:id', function(req, res){
  var recipeId = req.params.id;
  db.Recipe.findOne({_id: recipeId}, function(err, foundRecipe){
    res.json(foundRecipe);
  })
});

//update recipe
app.put('/recipe/:id', function(req,res){
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
});

//delete recipe
app.delete('/recipe/:id', function(req,res){
  var recipeId = req.params.idl
  db.Recipe.findOneAndRemove({_id: recipeId}, function(err, removedRecipe){
    res.json(removedRecipe)
  })
})

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
