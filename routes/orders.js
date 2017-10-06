// this is an example file showing how you might define route handlers

const db = require('../models');
//module.exports.Entree = require("../models/entree.js");

function getOrders(req, res) {
  db.Order.find({}, function(err, data) {
    if (err) {
      console.log('Error retrieving test items from DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}

function createOrder(req, res) {
  const newOrder = db.Order({
    custName: req.body.custName,
    howMany: req.body.howMany,
    feedsUpTo: req.body.feedsUpTo,
    price: req.body.price,
   // entrees: req.body.entrees
  });

  newOrder.save(function(err, data) {
    if (err) {
      console.log('Error saving test item to DB.', err);
      res.status(500).send('Internal server error');
    } else {
      res.status(201).json(data);
    }
  });
};

function findByIdOrders(req, res) {
  db.Order.findOne({_id: req.params.id }, function(err, data) {
    res.json(data);
  });
};

// function changeOrder(req, res) {
//   var orderId = req.params.id;
//   db.Order.findOne
// }
function deleteEntree(req, res) {
  // get book id from url params (`req.params`)
  console.log('entree delete', req.params);
  var orderId = req.params.id;
  // find the index of the book we want to remove
  db.Order.findOneAndRemove({ _id: orderId })
    .populate('custName')
    .exec(function (err, deletedBook) {
      res.json(deleteEntree);
  });
};

// functions are exported here so they can be referenced in server.js to respond to incoming requests
module.exports = {
  getOrders: getOrders,
  createOrder: createOrder,
  findByIdOrders: findByIdOrders,
  deleteEntree: deleteEntree
};
