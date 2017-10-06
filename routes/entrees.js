

const db = require('../models');


function getEntrees(req, res) {
  db.Entree.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createEntrees(req, res) {
  const newEntrees = db.Entree({
    name: req.body.name,
    sides: req.body.sides,
    ingredients: req.body.ingredients,
    glutenFree: req.body.glutenFree
  });

  newEntrees.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
};

function findByIdEntrees(req, res) {
  db.Entree.findOne({_id: req.params.id }, function(err, data) {
    res.json(data);
  });
};

module.exports = {
  getEntrees: getEntrees,
  createEntrees: createEntrees,
  findByIdEntrees: findByIdEntrees
}
