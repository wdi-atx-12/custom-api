// this is an example file showing how you might define route handlers

const db = require('../models');

//GET ALL FIGHTERS
function getFighterInfo(req, res){
  db.Fighter.find({}, function(err, fighters) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(fighters);
    }
  });
}

//GET SPECIFIC FIGHTER BY ID
function getOneFighter(req, res){
  db.Fighter.findOne({
    _id: req.params.id
  })
  .exec(function (err, fighter){
    if(err){
      res.send("error getting THAT fighter")
    } else {
      res.json(fighter)
    }
  })
};

//CREATE NEW FIGHTER
function createFighterEntree(req, res){
  const newFighter = db.Fighter({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    titleHolder: req.body.titleHolder,
    country: req.body.country,
    record: req.body.record,
  })
  newFighter.save(function(err, fighter) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(fighter);
    }
  });
};

// UPDATE EXISTING FIGHTER
function updateFighterInfo(req, res){
  db.Fighter.findOneAndUpdate({
    _id: req.params.id
  },
  {$set: req.body},
    {upsert: true},
    function(err, newFighter){
      if(err){
      console.log("Error updating fighter")
    } else {
      res.json(newFighter)
    }
  });
};

//DELETE FIGHTER
function removeFighter(req, res){
  db.Fighter.findByIdAndRemove({
    _id: req.params.id
  }, function(err, fighter){
    if(err){
      res.send("Error erasing fighter")
    } else {
      res.status(204)
    }
  })
};



// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getFighterInfo: getFighterInfo,
  getOneFighter: getOneFighter,
  createFighterEntree: createFighterEntree,
  updateFighterInfo: updateFighterInfo,
  removeFighter: removeFighter
};
