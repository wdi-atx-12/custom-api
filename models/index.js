const mongoose = require('mongoose');
require('dotenv').config();
// TODO: include all model files here (and export models together below)
const showModels = require('./show');
const venueModels = require('./venue');
const bandModels = require('./band');

// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {
  Show: showModels.Show,
  Venue: venueModels.Venue,
  Band: bandModels.Band
};
