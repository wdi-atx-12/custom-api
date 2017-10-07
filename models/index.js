

const mongoose = require('mongoose');  //need dependeny mongoose
require('dotenv').config();  //need dot env because we connect db down here


// TODO: include all model files here (and export models together below)
const testModels = require('./test');
const artistModels = require('./artist');

// connect to Mongo DB   // processes from my .env failsafe db (why? just cuz..)
mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {  // export this stuff so your server.js can see all the models. no
  // TODO: add references to all models here
  Test: testModels.Test,
  Artist: artistModels.Artist
};
