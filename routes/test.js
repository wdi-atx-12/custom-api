// this is an example file showing how you might define route handlers

const db = require('../models');

// function getTestItems(req, res) {
//   db.Test.find({}, function(err, data) {
//     if (err) {
//       console.log('Error retrieving test items from DB.', err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(data);
//     }
//   });
// }
//
// function createTestItem(req, res) {
//   const newTestItem = db.Test({
//     name: req.body.name,
//     count: req.body.count,
//     time: req.body.time,
//   });
//
//   //so it's creating the items and then saving them.
//
//   newTestItem.save(function(err, data) {
//     if (err) {
//       console.log('Error saving test item to DB.', err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.status(201).json(data);
//     }
//   });
// }

//You need to get the app items from the database.
function getAppItems(request, response) {
  //You have to find the app
  db.App.find({}, function(err, data) {
    if (err) {
      console.log(`Error, ${err}`);
    } else {
      res.status(200).json(response);
    }
  })
}

function createAppItem(req, res) {
  const newAppItem = db.appData({
    name: req.body.name,
    category: req.body.category
  })
  //Create app items, and save them.

  newAppItem.save(function(err, data) {
    if (err) {
      console.log(`err, ${err}`);
      res.status(500).send(`Internal server error`);
    } else {
      //So post the data if it's working.
      res.status(200).json(data);
    }
  })
}

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  // getTestItems: getTestItems,
  // createTestItem: createTestItem,
  getAppItems: getAppItems,
  createAppItem: createAppItem
};
