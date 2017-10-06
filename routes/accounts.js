const db = require('../models/');

module.exports = {
  getAll: function(req, res) {
    db.Account.find({}, (err, accounts) => {
      res.json(accounts);
    });
  },
  getOne: function(req, res) {
    res.send('getOne');
  },
  postNew: function(req, res) {
    // TODO handle initial transaction
    res.send('postNew');
  },
  update: function(req, res) {
    res.send('update');
  }
}
