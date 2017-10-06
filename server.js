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

const recipeRoutes = require('./routes/recipes');
//get all recipes
app.get('/recipe', recipeRoutes.getRecipes);
//post/create new recipe
app.post('/recipe', recipeRoutes.createRecipe);
//get one recipe by ID
app.get('/recipe/:id', recipeRoutes.getOneRecipe);
//update recipe
app.put('/recipe/:id', recipeRoutes.updateRecipe);
//delete recipe
app.delete('/recipe/:id', recipeRoutes.deleteRecipe);

const recipeBookRoutes = require('./routes.recipeBooks');
//get all recipe books
app.get('/recipe', recipeBookRoutes.getRecipeBook);
//TODO: make all other routes for recipe book
//TODO: put stuff on heroku

// start app
app.listen(port, function(err) {
  if (err) {
    console.log(`Error starting server on port ${port}`, err);
  } else {
    console.log(`Server running on port ${port}.`);
  }
});
