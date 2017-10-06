const db = require('../models/');

module.exports = {
  getAll: function(req, res) {
    db.Transactions
    res.json()
  },
  getOne: function(req, res) {
    res.send('getOne');
  },
  postNew: function(req, res) {
    res.send('postNew');
  },
  update: function(req, res) {
    res.send('update');
  }
}
