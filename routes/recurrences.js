const db = require('../models/'),
  Helpers = require('./routeHelpers'),
  handleDbResponse = Helpers.handleDbResponse,
  mapParams = Helpers.mapParams;

module.exports = {
  getAll: function(req, res) {
    db.Account.findOne({_id: req.params.id})
      .populate('recurrences').exec( (err, acct) => {
        handleDbResponse(res, err, acct.recurrences);
      });
  },
  getOne: function(req, res) {
    db.Recurrence.findOne({_id: req.params.id}, (err, recurrence) => {
      handleDbResponse(res, err, recurrence);
    });
  },
  postNew: function(req, res) {
    db.Account.findOne({_id: req.params.id}, (err, acct) => {
      if(err) {
        res.status(500).send(err);
      } else {
        let rec = new db.Recurrence(req.body);
        acct.recurrences.push(rec);
        rec.save({}, (err, newRecurrence) => {
          if(err) {
            res.status(500).send(err);
          } else {
            acct.save();
            handleDbResponse(res, err, newRecurrence);
          }
        });
      }
    });
  },
  update: function(req, res) {
    db.Recurrence.findByIdAndUpdate(req.params.id, mapParams(req.body)
    , {new: true}, (err, recurrence) => {
      handleDbResponse(res, err, recurrence);
    });
  }
};
