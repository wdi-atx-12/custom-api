//require models to connect data
const db = require('..models');

/*functions that handle data requests from routers on server.js
all go here */
function getArtistItem(req, res) {
  db.Artist.find({}, function(err,data) {
    if (err) {
      console.log('Error retrieving Artist items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}


//export to make your data results available.
module.exports = {
  getArtistItems: getArtistItems //,
  //createArtistItem: createArtistItem
}






/*  Remaining create / post functionality lets add this LAAAAAASSSST.

function createTestItem(req, res) {
  const newTestItem = db.Test({
    name: req.body.name,
    count: req.body.count,
    time: req.body.time,
  });

  newTestItem.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
}

*/
