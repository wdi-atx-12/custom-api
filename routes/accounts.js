const db = require('../models/');

module.exports = {
  getAll: function(req, res) {
    db.Account.find({}, (err, accounts) => {
      res.json(accounts);
    });
  },
  getOne: function(req, res) {
    db.Account.findOne({_id: req.params.id}, (err, account) => {
      res.json(account)
    });
  },
  postNew: function(req, res) {
    res.json(req.body);
  },
  update: function(req, res) {
    db.Account.findByIdAndUpdate(req.params.id, db.mapParams(req.body)
    , {new: true}, (err, account) => {
      if(err) { res.status(500).send(err); }
      res.json(account);
    });
  }
}
