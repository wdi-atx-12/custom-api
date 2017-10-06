const db = require('../models');

function getAllShows(req, res) {
  db.Show.find({}, (err, foundShows) => {
    if (err) {
      res.status(500).send('Error retrieving data.');
    } else {
      res.json(foundShows);
    }
  });
}

function addShow(req, res) {
  const newShow = db.Show({
    bands: req.body.bands,
    date: req.body.date,
    venue: req.body.venue,
    time: req.body.time,
    coverCharge: req.body.coverCharge
  });

  newShow.save((err, addedShow) => {
    if (err) {
      res.status(500).send('Failed to add data.');
    } else {
      res.status(201).json(addedShow);
    }
  });
}

module.exports = {
  getAllShows: getAllShows,
  addShow: addShow
}
