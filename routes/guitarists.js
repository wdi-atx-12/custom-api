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
    age: req.body.age,
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



function updateGuitarist(req, res) {
  var guitaristId = req.params.id;
  var update = {
    name: req.body.name,
    age: req.body.age,
    dateStarted: req.body.dateStarted,
    playStyle: req.body.playStyle,
    guitars: req.body.guitars
  };

  db.Guitarist.findOneAndUpdate({_id: guitaristId}, update, function(err, data) {
    if (err) {
      console.log('Error updating guitarist to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  })
}


function deleteGuitarist(req, res) {
  console.log('HEY')
  var guitaristId = req.params.id;
  var removeGuitarist = {
    name: req.body.name,
    age: req.body.age,
    dateStarted: req.body.dateStarted,
    playStyle: req.body.playStyle,
    guitars: req.body.guitars
  };

  db.Guitarist.remove({_id: guitaristId}, function(err, data) {
    if (err) {
      console.log('Error deleting guitarist to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  })
}



// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getGuitarist: getGuitarist,
  createGuitarist: createGuitarist,
  updateGuitarist: updateGuitarist,
  deleteGuitarist: deleteGuitarist
};