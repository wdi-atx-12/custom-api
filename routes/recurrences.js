const db = require('../models/');

module.exports = {
  getAll: function(req, res) {
    db.Recurrence.find({}, (err, recurrences) => {
      res.json(recurrences);
    });
  },
  getOne: function(req, res) {
    db.Recurrence.findOne({_id: req.params.id}, (err, recurrence) => {
      res.json(recurrence)
    });
  },
  postNew: function(req, res) {
    let acct = new db.Recurrence(req.body);
    acct.save({}, (err, newRecurrence) => {
      res.json(newRecurrence);
    });
  },
  update: function(req, res) {
    db.Recurrence.findByIdAndUpdate(req.params.id, db.mapParams(req.body)
    , {new: true}, (err, recurrence) => {
      if(err) { res.status(500).send(err); }
      res.json(recurrence);
    });
  }
};
