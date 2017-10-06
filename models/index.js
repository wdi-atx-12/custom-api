const mongoose = require('mongoose');
require('dotenv').config();
mongoose.Promise = global.Promise;

const food = require('./food');
const mealEntry = require('./meal-entry');
const mealTracker = require('./meal-tracker');


mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_MONGO_URI_LOCAL, {
  useMongoClient: true
});



// export
module.exports = {
  NutritionInfo: food.NutritionInfo,
  Food: food.Food,
  FoodServing: mealEntry.FoodServing,
  MealEntry: mealEntry.MealEntry,
  MealDay: mealTracker.MealDay,
  MealTracker: mealTracker.MealTracker,
};
