const db = require('../models');

function displayBandItems(req, res) {
  db.Band.find({}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
function displayBandItem(req, res) {
  db.Band.findOne({_id: req.params.id}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
function createBandItem(req, res) {
  const newBandItem = db.Band({
    name: req.body.name,
    origin: req.body.origin,
    genre: req.body.genre,
    established: req.body.established
  });

newBandItem.save(function(err, data){
  if (err){
    console.log('error saving band item to data bas', err);
    res.status(500).send('Internal server error');
  } else {
    res.status(201).json(data);
  }

});
}
// function updateBandItem(req,res){
//     var updateBand = db.params.id;
//     var update ={
//     name: req.body.name,
//     origin: req.body.origin,
//     genre: req.body.genre,
//     established: req.body.established
//   }
//   };
//
//   db.Band.findByIdAndUpdate({_id: req.params.id}, function(err, data){
//     if (err) {
//       console.log('Error retrieving band items from DB.', err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(data);
//     }
// });


module.exports = {
  displayBandItems: displayBandItems,
  createBandItem: createBandItem,
  displayBandItem: displayBandItem
  // updateBandItem: updateBandItem
}
