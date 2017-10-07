// this is an example file showing how you might define route handlers

const db = require('../models');

function getFighterInfo(req, res) {
  db.Test.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createFighterEntree(req, res) {
  const newTestItem = db.Test({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    league_id: req.body.league_id,
    titleHolder: req.body.titleHolder,
    country: req.body.country,
    team_id: req.body.team_id,
    record: req.body.record,
    koPercentage: req.body.koPercentage,
    height: req.body.height,
    weight: req.body.weight
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

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getFighterInfo: getFighterInfo,
  createFighterEntree: createFighterEntree,
};
