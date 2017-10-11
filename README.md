#RECIPE BOOK API DOCUMENTATION ### By: Sophia Chow

Welcome to my Recipe Book API! Here you will find documentation you need to start creating, retrieving,
updating, and deleting recipes in your recipe book.

##About My Recipe Book API:

The API built on REST principals keeps track of current recipes and any recipes you'd like to add. You can first, create your own recipe book with your own name, name of book, and an array of your recipes. Each time you add a recipe, it will add to your collection of recipes in your recipe book! You can even create separate recipe books if you want to categorize your recipes. In the future, I'd like to make a way for you to search and organize your recipes through your tags.

# PUBLIC ENDPOINTS

##Here is the URL: https://safe-cove-13448.herokuapp.com/

CRUD Methods |    Route                   | RESTful Description   |         Purpose
------------ | -------------------------- | --------------------- | ------------------------
GET          | /recipeBook                | recipeBook Read       | Listing all recipe books
GET          | /recipeBook/:id            | recipeBook Read one   | Gets/shows one recipe book
POST         | /recipeBook                | recipeBook Create new | Creates new recipe book
PUT          | /recipeBook/:id            | recipeBook Update     | Updates existing recipe book
DELETE       | /recipeBook/:id            | recipeBook Delete     | Deletes selected recipe book
GET          | /recipeBook/recipe         | recipe Read           | Lists all recipes
GET          | /recipeBook/recipe/:id     | recipe Read one       | Lists selected recipe
POST         | /recipeBook/recipe         | recipe Create new     | Creates new recipe
PUT          | /recipeBook/recipe/:id     | recipe Create new     | Creates a new recipe
DELETE       | /recipeBook/recipe/:id     | recipe Delete         | Deletes selected recipe

## Schema Structure

Make sure when you use CRUD methods, use these Schema structures.

```
const RecipeBookSchema = new mongoose.Schema({
  name: String,
  user: String,
  recipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }]
});
```
```
const RecipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  imageUrl: String,
  ingredients: [{
    type: String,
    default: ""
  }],
  instructions: String,
  tags: [{
    type: String,
    default: ""
  }]
});
```

I hope you enjoy this API! It is a work in progress so come back and check up the updates! :)
