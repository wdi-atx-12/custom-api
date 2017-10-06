const mongoose = require('mongoose');
const db = require('./models');

//NEED playlist

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
  user: admin
})

var sayMyName = new db.Song ({
  name: "Say My Name",
  artist: "Destiny's Child",
  url: "https://www.youtube.com/watch?v=sQgd6MccwZc",
  user: admin
})

var throwback = new db.Playlist ({
  name: "Throwback",
  songs: [sayMyName, ifYouHadMyLove],
  tags: ["classics", "throwback"],
  user: admin
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
    console.log('song save success', savedSong);
  }
});

sayMyName.save(function(err, savedSong){
  if (err) {
    console.log('error saving song');
  } else {
    console.log('song save success', savedSong);
  }
});

throwback.save(function(err, savedPlaylist){
  if (err) {
    console.log('error saving playlist');
  } else {
    console.log('playlist save success');
  }
})
