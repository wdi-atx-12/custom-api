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

function getEraById(req, res){
  var eraId = req.params.id;
  db.Era.findById({_id: eraId}, function(err, data){
    if (err) {
      console.log('Error retieving Era from DB.', err);
      res.status(500).send('Internal serve error');
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

function updateEra(req, res) {
  const putEra = req.params.id;
  var update = {
    name: req.body.name,
    dates: req.body.dates,
    stylisticElements: req.body.stylisticElements,
    noteableComposers: req.body.noteableComposers
  };
  db.Era.findOneAndUpdate({_id: putEra}, update, function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

function deleteEra(req, res){
  console.log('checking for delete');
  var eraId = req.params.id;
  var removeEra = {
    name: req.body.name,
    dates: req.body.dates,
    noteableComposers: req.body.noteableComposers,
    stylisticElements: req.body.stylisticElements
  };


db.Era.remove({_id: eraId}, function(err, data) {
     if (err) {
       console.log('Error deleting Era to DB.', err);
       res.status(500).send('Internal server error');
     } else {
       res.status(201).json(data);
     }
   })
}


// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getEra: getEra,
  createEra: createEra,
  updateEra: updateEra,
  deleteEra: deleteEra,
  getEraById: getEraById
};
