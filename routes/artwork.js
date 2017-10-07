// this is an example file showing how you might define route handlers
const db = require('../models');

function getArtworkItems(req, res) {
  db.Artwork.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}


function getArtworkItem(req, res) {
  db.Artwork.findOne({_id: req.params.id}, function(err,data) {
    if (err) {
      console.log('Error retrieving specific artist from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createArtworkItem(req, res) {
  const newArtworkItem = db.Artwork({
  artworkName: req.body.artworkName,
  imageUrl: req.body.imageUrl,
  tags: [ ],
  location: req.body.location
  //Artist: ArtistSchema
  });

  newArtworkItem.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getArtworkItems: getArtworkItems,
  getArtworkItem: getArtworkItem,
  createArtworkItem: createArtworkItem
};
