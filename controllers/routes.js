const express = require('express');
const _ = require('lodash');
const {ObjectID} = require('mongodb');
const router = express.Router();


let db = require('../models');


router.get('/', (req, res) => {
  db.Food.find({}).then((data) => {
    if(!data) {
      res.status(500).send();
    }
    res.send(data);
  }).catch((err) => {
    res.status(400).send();
  });
});


router.post('/', (req, res) => {
  let body = _.pick(req.body, Object.keys(db.Food.schema.paths));
  let food = new db.Food(body);

  food.save().then((data) => {
    res.send(data);
  }).catch((err) => {
    res.status(400).send();
  });
});


// Find Food by ObjectID
router.get('/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  db.Food.findById(id).then((foundItem) => {
    if (!foundItem) {
      return res.status(404).send(`Error finding item with ObjectID: ${id}`);
    }
    res.send(foundItem);
  }).catch((err) => {
    res.status(400).send();
  });
});


// Update a Food Entry

router.patch('/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  db.Food.findByIdAndUpdate(id, {
    $set: req.body,
    new: true
  }).then((foundItem) => {
    if (!foundItem) {
      return res.status(404).send(`Error updating item with ObjectID: ${id}`);
    }
    res.send(foundItem);
  }).catch((err) => {
    res.send(400).send();
  });
});


// Delete a Food Entry

router.delete('/:id', (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  db.Food.findByIdAndRemove(id).then((removeItem) => {
    if (!removeItem) {
      return res.status(404).send(`Error removing item with ObejctID: ${id}`);
    }

    res.send({
      'Removed Item': `${removeItem.name}`,
      'Object ID': `${id}`,
    });
  }).catch((err) => {
    res.status(400).send();
  });
});











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





module.exports = router;