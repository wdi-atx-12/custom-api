// this is an example file showing how you might define route handlers

const db = require('../models');

function getEra(req, res) {
  db.Era.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving Eras from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createEra(req, res) {
  const newEra = db.Era({
    name: req.body.name,
    dates: req.body.dates,
    noteableComposers: req.body.noteableComposers,
    stylisticElements: req.body.stylisticElements
  });

  newEra.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getAllEras: getEra,
  createEra: createEra,
};
