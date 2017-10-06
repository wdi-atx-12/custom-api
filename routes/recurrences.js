const db = require('../models/');

module.exports = {
  getAll: function(req, res) {
    res.send('getAll'); // TODO
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
