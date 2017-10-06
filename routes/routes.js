const db = require('../models');

// function getUsers(req, res) {
//   db.User.find({}, function (err, data){
//     if (err) {
//       console.log("error retrieving users from db", err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(data);
//     }
//   });
// }
//
// function getSongs(req, res) {
//   db.song.find({}, function (err, data){
//     if (err) {
//       console.log("error retrieving songs from db", err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(data);
//     }
//   });
// }


// app.get('/users/:id', routeyRoutes.getUserById);

module.exports = {
  getUsers: getUsers
};
