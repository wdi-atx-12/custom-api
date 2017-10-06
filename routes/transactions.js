const db = require('../models/');

module.exports = {
  getAll: function(req, res) {
    db.Transaction.find({}, (err, transactions) => {
      res.json(transactions);
    });
  },
  getOne: function(req, res) {
    db.Transaction.findOne({_id: req.params.id}, (err, transaction) => {
      res.json(transaction);
    });
  },
  postNew: function(req, res) {
    let acct = new db.Transaction(req.body);
    acct.save({}, (err, newTransaction) => {
      res.json(newTransaction);
    });
  },
  update: function(req, res) {
    db.Transaction.findByIdAndUpdate(req.params.id, db.mapParams(req.body)
    , {new: true}, (err, transaction) => {
      if(err) { res.status(500).send(err); }
      res.json(transaction);
    });
  }
};
