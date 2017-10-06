const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealDaySchema = new Schema({
  date: Date,
  isCheatDay: Boolean,
  meals: [{
    type: Schema.Types.ObjectId,
    ref: 'MealEntry'
  }]
});

const trackerSchema = new Schema({
  name: String,
  mealDays: [mealDaySchema]
});

const MealDay = mongoose.model('MealDay', mealDaySchema);
const MealTracker = mongoose.model('MealTracker', trackerSchema);

module.exports = {
  MealDay: MealDay,
  MealTracker: MealTracker,
};
