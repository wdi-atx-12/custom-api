const db = require('../models');

function displayAlbumItems(req, res) {
  db.Album.find({}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
function displayAlbumItem(req, res) {
  db.Album.findOne({_id: req.params.id}, function(err, data){
    // console.log('am i working', db);
    if (err) {
      console.log('Error retrieving band items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
function createAlbumItem(req, res) {
  const newAlbumItem = db.Album({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    tags: []

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
module.exports = {
  displayAlbumItems: displayAlbumItems,
  createAlbumItem: createAlbumItem,
  displayAlbumItem: displayAlbumItem
}
