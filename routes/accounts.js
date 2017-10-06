module.exports = {
  getAll: function(req, res) {
    res.send('you are home!'); // TODO
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
