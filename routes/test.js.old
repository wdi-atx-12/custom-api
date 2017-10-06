// this is an example file showing how you might define route handlers

const db = require('../models');

function getTestItems(req, res) {
  db.Test.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

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

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getTestItems: getTestItems,
  createTestItem: createTestItem,
};
