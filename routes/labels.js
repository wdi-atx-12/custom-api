//handles requests for /labels
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../models');

function getAllLabels(req, res){
  db.Label.find({}, function(err, data){
    if(err){
      giveErrorMessage(err);
    }else{
      res.json(data)
    }
  })
};

function createNewLabel(req, res){
  const newLabelItem = db.Label({
    _id: new mongoose.Types.ObjectId(),
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
      db.Band.find({_id:req.body.bands}).populate('label');
      res.status(201).json(data);
    }
  });
};

function labelById(req, res){
  const labelId = req.params.label_id;
  db.Label.findById(labelId, function(err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      res.json(data);
    }
  })
};

function updateLabelById(req, res){
  const labelId = req.params.label_id;
  db.Label.findById(labelId, function(err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      data.name = req.body.name || data.name;
      data.location = req.body.location || data.location;
      data.established = req.body.established || data.established;
      data.bands = req.body.bands || data.bands;
      data.genre = req.body.genre || data.genre;
    }
    data.save(function(err,data){
      if(err){
        console.log('Error saving band to DB.', err);
        res.status(500).send('Internal server error.');
      }else{
        res.status(201).json(data);
      }
    })
  })
};


function deleteLabelById(req, res){
  const labelId = req.params.label_id;
  var labelName;
  db.Label.findById(labelId, function(err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      labelName = data.name;
    }
  })
  db.Label.findByIdAndRemove(labelId, function (err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      res.status(201).send("The record for \'" + labelName + "\' was deleted.")
    }
  })
};

 module.exports = {
   getAllLabels: getAllLabels,
   createNewLabel: createNewLabel,
   labelById: labelById,
   updateLabelById: updateLabelById,
   deleteLabelById: deleteLabelById
 };
