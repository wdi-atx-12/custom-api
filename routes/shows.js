const db = require('../models');
const helper = require('./route-helper');

function getAllShows(req, res) {
  db.Show.find({}, (err, foundShows) => {
    helper.dataHandler(res, err, 'Error retrieving data.', foundShows);
  });
}

function getShow(req, res) {
  var showId = req.params.id;
  db.Show.find({_id: showId}, (err, foundShow) => {
    helper.dataHandler(res, err, 'Error retrieving data.', foundShow);
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
    helper.dataHandler(res, err, 'Error adding data.', addedShow);
  });
}

function updateShow(req, res) {
  var showId = req.params.id;
  var update = {
    bands: req.body.bands,
    date: req.body.date,
    venue: req.body.venue,
    time: req.body.time,
    coverCharge: req.body.coverCharge
  }
  db.Show.findOneAndUpdate({_id: showId}, update, (err, updatedShow) => {
    helper.dataHandler(res, err, 'Error updating data.', updatedShow);
  });
}

function deleteShow(req, res) {
  var showId = req.params.id;
  db.Show.findOneAndRemove({_id: showId}, (err, deletedShow) => {
    helper.dataHandler(res, err, 'Error deleting data.', deletedShow);
  });
}


module.exports = {
  getAllShows: getAllShows,
  getShow: getShow,
  addShow: addShow,
  updateShow: updateShow,
  deleteShow: deleteShow
}
