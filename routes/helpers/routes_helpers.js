const _ = require('lodash');
const {ObjectID} = require('mongodb');
let db = require('../../models');



let getFood = (req, res) => {
  db.Food.find({}).then((data) => {
    if(!data) {
      res.status(500).send();
    }
    res.send(data);
  }).catch((err) => {
    res.status(400).send();
  });
};


let postFood = (req, res) => {
  let body = _.pick(req.body, Object.keys(db.Food.schema.paths));
  let food = new db.Food(body);

  food.save().then((data) => {
    res.status(201).send(data);
  }).catch((err) => {
    res.status(400).send();
  });
};


let getFoodById = (req, res) => {
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
};


let updateFoodById = (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.sendStatus(404);
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
    res.sendStatus(400);
  });
};


let deleteItemById = (req, res) => {
  let id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return res.sendStatus(404);
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
    res.sendStatus(400);
  });
};





module.exports = {
  getFood,
  postFood,
  getFoodById,
  updateFoodById,
  deleteItemById
};