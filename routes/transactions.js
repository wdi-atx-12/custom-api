const db = require('../models/'),
  Helpers = require('./routeHelpers'),
  handleDbResponse = Helpers.handleDbResponse,
  mapParams = Helpers.mapParams;

module.exports = {
  getAll: function(req, res) { // TODO this should find within a given account, not whole db
    db.Transaction.find({}, (err, transactions) => {
      handleDbResponse(res, err, transactions);
    });
  },
  // there is no POST method for this resource allowed
  getOne: function(req, res) {
    db.Transaction.findOne({_id: req.params.id}, (err, transaction) => {
      handleDbResponse(res, err, transaction);
    });
  },
  update: function(req, res) {
    db.Transaction.findByIdAndUpdate(req.params.id, mapParams(req.body)
    , {new: true}, (err, transaction) => {
      if(err) { res.status(500).send(err); }
      res.json(transaction);
    });
  }
};
