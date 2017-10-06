const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let nutritionInfoSchema = new Schema({
  servingSizeAmount: Number,
  servingSizeUnit: String,
  servingSizeDescription: String,
  calories: Number,
  totalFat: Number,
  sodium: Number,
  sugar: Number,
  protein: Number,
  fiber: Number
});

let foodSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    default: ""
  },
  tags: [{
    type: String,
    default: ""
  }],
  NutritionInfo: [nutritionInfoSchema]
});

let NutritionInfo = mongoose.model('NutritionInfo', nutritionInfoSchema);
let Food = mongoose.model('Food', foodSchema);


module.exports = {
  NutritionInfo,
  Food,
};
