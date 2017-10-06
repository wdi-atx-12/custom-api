const mongoose = require('mongoose');
const db = require('./models');

var admin = new db.User ({
  username: "admin",
  displayName: "Karla the Admin",
  artist: false,
  playlist: []
})

var ifYouHadMyLove = new db.Song ({
  name: "If You Had My Love",
  artist: "Jennifer Lopez",
  url: "https://open.spotify.com/track/3x4yV0hW5Ve3TKhFkXSqFn",
  // user: User[0]._id // can't figure out how to do this..?
})

admin.save(function(err, savedUser){ // throws error if username is not unique :)
  if (err) {
    console.log('error saving user');
  } else {
    console.log('user save success');
  }
});

ifYouHadMyLove.save(function(err, savedSong){
  if (err) {
    console.log('error saving song');
  } else {
    console.log('song save success');
  }
});
