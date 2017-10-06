const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodServingSchema = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: 'Food'
  },
  numServings: Number
});

const mealEntrySchema = new Schema({
  time: Date,
  foodItems: [foodServingSchema]
});

const FoodServing = mongoose.model('FoodServing', foodServingSchema);
const MealEntry = mongoose.model('MealEntry', mealEntrySchema);

module.exports = {
  FoodServing,
  MealEntry,
};
