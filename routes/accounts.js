const db = require('../models/'),
  Helpers = require('./routeHelpers'),
  handleDbResponse = Helpers.handleDbResponse,
  mapParams = Helpers.mapParams;

module.exports = {
  getAll: function(req, res) {
    db.Account.find({}, (err, accounts) => {
      handleDbResponse(res, err, accounts);
    });
  },
  getOne: function(req, res) {
    db.Account.findOne({_id: req.params.id}, (err, account) => {
      handleDbResponse(res, err, account);
    });
  },
  postNew: function(req, res) {
    let acct = new db.Account(req.body);
    acct.save({}, (err, newAcct) => {
      handleDbResponse(res, err, newAcct);
    });
  },
  update: function(req, res) {
    db.Account.findByIdAndUpdate(req.params.id, mapParams(req.body)
    , {new: true}, (err, account) => {
      handleDbResponse(res, err, accounts);
    });
  },
  delete: function(req, res) {
    db.Account.findByIdAndRemove(req.params.id, {}, (err, removed) => {
      handleDbResponse(res, err, {});
    });
  }
};
