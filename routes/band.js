const db = require('../models');

function DisplayBand(req, res) {
  db.Band.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function CreateBand(req, res) {
  const newTestItem = db.Band({
    name: req.body.name,
    origin: req.body.count,
    genre: req.body.time,
    established: req.body.time,
  });
}

module.exports = {
  DisplayBand: DisplayBand,
  CreateBand: CreateBand
}
