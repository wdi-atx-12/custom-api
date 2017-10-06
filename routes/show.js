const db = require('./models');

function getAllShows(req, res) {
  db.Show.find({}, (err, foundShows) => {
    if (err) {
      res.status(500).send('Error retrieving data.');
    } else {
      res.send(foundShows);
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
  })
}
