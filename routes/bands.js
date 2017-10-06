const db = require('../models');
const helper = require('./route-helper');

function getAllBands(req, res) {
  db.Band.find({}, (err, foundBands) => {
    helper.dataHandler(res, err, 'Error recieving data.', foundBands);
  });
}

function getBand(req, res) {
  var bandId = req.params.id;
  db.Band.findOne({_id: bandId}, (err, foundBand) => {
    helper.dataHandler(res, err, 'Error recieving data.', foundBand);
  });
}

function addBand(req, res) {
  const newBand = db.Band({
    name: req.body.name,
    genre: req.body.genre,
    upcomingShows: req.body.upcomingShows,
    website: req.body.website
  });
  newBand.save((err, addedBand) => {
    helper.dataHandler(res, err, 'Error adding data.', addedBand);
  });
}

function updateBand(res, req) {
  var bandId = req.params.id;
  var update = {
    name: req.body.name,
    genre: req.body.genre,
    upcomingShows: req.body.upcomingShows,
    website: req.body.website
  };
  db.Band.findOneAndUpdate({_id: bandId}, update, (err, updatedBand) => {
    helper.dataHandler(res, err, 'Error updating data.', updatedBand);
  });
}

function deleteBand(res, req) {
  var bandId = req.params.id;
  db.Band.findOneAndRemove({_id: bandId}, (err, deletedBand) => {
    helper.dataHandler(res, err, 'Error deleting data.', deletedBand);
  });
}

module.exports = {
  getAllBands: getAllBands,
  getBand: getBand,
  addBand: addBand,
  updateBand: updateBand,
  deleteBand: deleteBand
}
