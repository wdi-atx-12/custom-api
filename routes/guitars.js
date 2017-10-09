const db = require('../models');

function getGuitars(req, res) {
  db.Guitars.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving guitars from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createGuitars(req, res) {
  const newGuitar = db.Guitars({
    name: req.body.name,
    type: req.body.type,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    origin: req.body.origin,
    neckThrough: req.body.neckThrough,
    price: req.body.price

  });

  newGuitar.save(function(err, data) {
    if (err) {
      console.log('Error saving guitar to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getGuitars: getGuitars,
  createGuitars: createGuitars,
};