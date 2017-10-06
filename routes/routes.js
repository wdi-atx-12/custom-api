const express = require('express');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const router = express.Router();


let db = require('../models');
let helpers = require('./helpers/routes_helpers');


router.route('/')
  .get(helpers.getFood)
  .post(helpers.postFood);



router.route('/:id')
  .get(helpers.getFoodById)
  .put(helpers.updateFoodById)
  .delete(helpers.deleteItemById);


module.exports = router;










// router.get('/addFood', (req, res) => {
//   res.render('index');
// });


// router.post('/addFood', (req, res) => {
//   let bodyPaths = _.pick(req.body, Object.keys(db.Food.schema.paths));
//   let food = new db.Food(bodyPaths);
//   let infoPaths = _.pick(req.body, Object.keys(db.NutritionInfo.schema.paths));

//   food.NutritionInfo.push(infoPaths);
//   food.save().then((food) => {
//     res.send();
//   }).catch((e) => {
//     res.status(400).send("Unable to save to database");
//   });
// });
