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
};

function createUser(req, res) {
  var username = req.body.username;
  var displayName = req.body.displayName;
  var artist = req.body.artist;
  var playlists = req.body.playlist;

  var newUser = new db.User({
    username: username,
    displayName: displayName,
    artist: artist,
    playlists: playlists
  });

  newUser.save(function(err, newUser){
    res.send('user created')
  });
};

function deleteUserById(req, res) {
  var userID = req.params.id;
  db.User.findOneAndRemove({_id: userID}, function (err, deletedUser){
    res.json(deletedUser);
  })
};

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

function createSong(req, res) {
  var name = req.body.name;
  var artist = req.body.artist;
  var url = req.body.url;
  var user = req.body.user;

  var newSong = new db.Song({
    name: name,
    artist: artist,
    url: url,
    user: user
  });

  newSong.save(function(err, newSong){
    res.send('song created')
  });
};

function deleteSongById(req, res) {
  var songID = req.params.id;
  db.Song.findOneAndRemove({_id: songID}, function (err, deletedSong){
    res.json(deletedSong);
  })
};

function getPlaylists(req, res) {
  db.Playlist.find({}, function (err, data){
    if (err) {
      console.log("error retrieving playlists from db", err);
      res.status(500).send('Internal server error');
    } else {
      res.json(data);
    }
  });
};

//TODO: make adding songs by id to created playlist work
function createPlaylist(req, res) {
  var name = req.body.name;
  var songs = req.body.songs;
  var tags = req.body.tags;
  var user = req.body.user;

  var newPlaylist = new db.Playlist({
    name: name,
    songs: [],
    tags: [],
    user: user
  });

  newPlaylist.save(function(err, newPlaylist){
    res.send('playlist created')
  });
};

function deletePlaylistById(req, res) {
  var playlistID = req.params.id;
  db.Playlist.findOneAndRemove({_id: playlistID}, function (err, deletedPlaylist){
    res.json(deletedPlaylist);
  })
};


module.exports = {
  getUsers: getUsers,
  getUserById: getUserById,
  createUser: createUser,
  // updateUserById: updateUserById,
  deleteUserById: deleteUserById,

  getSongs: getSongs,
  createSong: createSong,
  // updateSongById: updateSongById,
  deleteSongById: deleteSongById,

  getPlaylists: getPlaylists,
  createPlaylist: createPlaylist,
  // updatePlaylistById: updatePlaylistById,
  deletePlaylistById: deletePlaylistById,
};
