//handles requests for /bands

const db = require('../models');

function getAllBands(req, res){
  db.Band.find({}, function(err, data){
    if (err){
      console.log("There was an error: ", err);
      res.status(500).send("Internal Server Error");
    }else{
      res.json(data);
    }
  })
};

function createNewBand(req, res){
  const newBandItem = db.Band({
    name: req.body.name,
    established: req.body.established,
    hometown: req.body.hometown,
    label: req.body.label,
    genre: req.body.genre
  })
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
      console.log('Error finding band by ID', err);
      res.status(500).send('Internal server error. There might be no band by that ID.');
    }else{
      res.json(data);
    }
  })
};

module.exports = {
  getAllBands: getAllBands,
  createNewBand: createNewBand,
  bandById: bandById
};
