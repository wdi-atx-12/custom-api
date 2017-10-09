//handles requests for /labels

const db = require('../models');

function getAllLabels(req, res){
  db.Label.find({}, function(err, data){
    if(err){
      console.log("There was an error: ", err);
    }else{
      res.json(data)
    }
  })
};

function createNewLabel(req, res){
  const newLabelItem = db.Label({
    name: req.body.name,
    location: req.body.location,
    established: req.body.established,
    bands: req.body.bands,
    genre: req.body.genre
  });

  newLabelItem.save(function (err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      res.status(201).json(data);
    }
  });
};

function labelById(req, res){
  const labelId = req.params.label_id;
  db.Label.findById(labelId, function(err, data){
    if(err){
      res.status(500).send('Internal server error. There might be no label by that ID.')
    }else{
      res.json(data);
    }
  })
};

 module.exports = {
   getAllLabels: getAllLabels,
   createNewLabel: createNewLabel,
   labelById: labelById
 };
