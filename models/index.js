const mongoose = require('mongoose');
require('dotenv').config();

// TOdo: include all model files here (and export models together below)
// const testModels = require('./test');
const bandModels = require('./band-schema');


// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {
  // TOdo: add references to all models here
  // Test: testModels.Test,
  Band: bandModels.Band
};
