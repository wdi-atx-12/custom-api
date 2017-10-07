//require models to connect data
const db = require('../models');

/*functions that handle data requests from routers on server.js
all go here */
function getArtistItems(req, res) {
  db.Artist.find({}, function(err,data) {
    if (err) {
      console.log('Error retrieving Artist items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createArtistItem(req, res) {
  const newArtistItem = db.Artist({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    portraitImg: req.body.portraitImg,
    hometown: req.body.hometown,
    bio: req.body.bio
    //Artworks: req.body.Artworks
   });

  newArtistItem.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

//export to make your data results available.
module.exports = {
  getArtistItems: getArtistItems,
  createArtistItem: createArtistItem
}


