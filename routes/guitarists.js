// this is an example file showing how you might define route handlers

const db = require('../models');

function getGuitarist(req, res) {
  db.Guitarist.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving guitarists from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createGuitarist(req, res) {
  const newGuitarist = db.Guitarist({
    name: req.body.name,
    count: req.body.count,
    dateStarted: req.body.dateStarted,
    playStyle: req.body.playStyle,
    guitars: req.body.guitars
  });

  newGuitarist.save(function(err, data) {
    if (err) {
      console.log('Error saving guitarist to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getGuitarist: getGuitarist,
  createGuitarist: createGuitarist,
};