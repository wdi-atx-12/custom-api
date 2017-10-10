// dependencies
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
// app config
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());

// app routes
app.get('/', function(req,res){
  res.send('hello world');
});

const recipeRoutes = require('./routes/recipes');
//get all recipes
app.get('/recipeBook/recipe', recipeRoutes.getRecipes);
//get one recipe by ID
app.get('/recipeBook/recipe/:id', recipeRoutes.getOneRecipe);
//post/create new recipe
app.post('/recipeBook/recipe', recipeRoutes.createRecipe);
//update recipe
app.put('/recipeBook/recipe/:id', recipeRoutes.updateRecipe);
//delete recipe
app.delete('/recipeBook/recipe/:id', recipeRoutes.deleteRecipe);

const recipeBookRoutes = require('./routes/recipeBooks');
// //get all recipe books
app.get('/recipeBook', recipeBookRoutes.getRecipeBook);
// get one recipe book
app.get('/recipeBook/:id', recipeBookRoutes.getOneRecipeBook);
//create new recipe book
app.post('/recipeBook', recipeBookRoutes.createNewRecipeBook);
//update recipe book
app.put('/recipeBook/:id', recipeBookRoutes.updateRecipeBook);
//delete recipe book
app.delete('/recipeBook/:id', recipeBookRoutes.deleteRecipeBook);
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
