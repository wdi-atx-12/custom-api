//handles requests for /bands
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../models');

function getAllBands(req, res){
  db.Band.find({}, function(err, data){
    if (err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      res.json(data);
    }
  })
};

function createNewBand(req, res){
  const newBandItem = db.Band({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    established: req.body.established,
    hometown: req.body.hometown,
    label: req.body.label,
    genre: req.body.genre
  })
  db.Label.findOne({_id: req.body.label}, function(err, labelOn){
    console.log(newBandItem._id);
    labelOn.bands.push(newBandItem._id);
    labelOn.populate('bands');
    labelOn.save();
    
  });
  newBandItem.save(function (err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      res.status(201).json(data);
    }
  });
};

function bandById(req, res){
  const bandId = req.params.band_id;
  db.Band.findById(bandId, function(err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      res.json(data);
    }
  })
};

function updateBandById(req, res){
  const bandId = req.params.band_id;
  db.Band.findById(bandId, function(err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      data.name = req.body.name ||data.name;
      data.established = req.body.established ||data.established;
      data.hometown = req.body.hometown ||data.hometown;
      data.label = req.body.label ||data.label;
      data.genre = req.body.genre ||data.genre;
    }
    data.save(function(err,data){
      if(err){
        console.log('Error saving band to DB.', err);
        res.status(500).send('Internal server error.');
      }else{
        res.json(data);
      }
    })
  })
};

function deleteBandById(req, res){
  const bandId = req.params.band_id;
  var bandName;
  db.Band.findById(bandId, function(err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      bandName = data.name || "";
    }
  });
  db.Band.findByIdAndRemove(bandId, function(err, data){
    if(err){
      console.log('Error saving band to DB.', err);
      res.status(500).send('Internal server error.');
    }else{
      res.status(201).send("The record for \'" + bandName + "\' was deleted.");
    }
  })
};


module.exports = {
  getAllBands: getAllBands,
  createNewBand: createNewBand,
  bandById: bandById,
  updateBandById: updateBandById,
  deleteBandById: deleteBandById
};
