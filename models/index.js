const mongoose = require('mongoose');
require('dotenv').config();
// TODO: include all model files here (and export models together below)
//const testModels = require('./test');

// connect to Mongo DB
mongoose.connection.openUri(process.env.DB_CONN || process.env.MONGODB_URI, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});
//makes schemas and models available
module.exports.Entree = require("./entree.js");
module.exports.Order = require("./order.js")
