const db = require('../models');

function getUsers(req, res) {
  db.User.find({}, function (err, data){
    if (err) {
      console.log("error retrieving users from db", err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
// in server file/no route file (works)
// get all users
// app.get('/users', function(req, res) {
//   db.User.find({}, function (err, data){
//     if (err) {
//       console.log("error retrieving users from db", err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(data);
//     }
//   });
// // });

//(TODO: but i want all songs in a playlist)
function getSongs(req, res) {
  db.Song.find({}, function (err, data){
    if (err) {
      console.log("error retrieving songs from db", err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
}
// in server file/no route file (works)
// get all songs (TODO: but i want all songs in a playlist)
// app.get('/songs', function(req, res) {
//   db.Song.find({}, function (err, data){
//     if (err) {
//       console.log("error retrieving songs from db", err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(data);
//     }
//   });
// });

function getUserById(req, res){
  var userID = req.params.id;
  db.User.findOne({_id: userID}, function (err, foundUser){
    if (err) {
      console.log("error retrieving users from db", err);
      res.status(500).send('Internal server error');
    } else {
      res.json(foundUser);
    }
  });
}
// in server file/no route file (works)
// get user by ID
// app.get('/users/:id', function(req, res) {
//   var userID = req.params.id;
//   db.User.findOne({_id: userID}, function (err, foundUser){
//     if (err) {
//       console.log("error retrieving users from db", err);
//       res.status(500).send('Internal server error');
//     } else {
//       res.json(foundUser);
//     }
//   });
// });


// app.get('/users/:id', routeyRoutes.getUserById);

module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  getSongs: getSongs
};
