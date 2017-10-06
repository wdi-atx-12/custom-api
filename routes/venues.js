const db = require('../models');
const helper = require('./route-helper');

function getAllVenues(req, res) {
  db.Venue.find({}, (err, foundVenues) => {
    helper.dataHandler(res, err, 'Error retrieving data.', foundVenues);
  });
}

function getVenue(req, res) {
  var venueId = req.params.id;
  db.Venue.findOne({_id: venueId}, (err, foundVenue) => {
    helper.dataHandler(res, err, 'Error retrieving data.', foundVenue);
  });
}

function addVenue(req, res) {
  const newVenue = db.Venue({
    name: req.body.name,
    location: req.body.location,
    showSchedule: req.body.showSchedule,
    website: req.body.website,
    twentyOneAndUp: req.body.twentyOneAndUp
  });
  newVenue.save((err, addedVenue) => {
    helper.dataHandler(res, err, 'Error adding data.', addedVenue);
  });
}

function updateVenue(req, res) {
  var venueId = req.params.id;
  var update = {
    name: req.body.name,
    location: req.body.location,
    showSchedule: req.body.showSchedule,
    website: req.body.website,
    twentyOneAndUp: req.body.twentyOneAndUp
  }
  db.Venue.findOneAndUpdate({_id: venueId}, update, (err, updatedVenue) => {
    helper.dataHandler(res, err, 'Error updating data.', updatedVenue);
  });
}

function deleteVenue(req, res) {
  var venueId = req.params.id;
  db.Venue.findOneAndRemove({_id: venueId}, (err, deletedVenue) => {
    helper.dataHandler(res, err, 'Error deleted data.', deletedVenue);
  });
}

module.exports = {
  getAllVenues: getAllVenues,
  getVenue: getVenue,
  addVenue: addVenue,
  updateVenue: updateVenue,
  deleteVenue: deleteVenue
}


