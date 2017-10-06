const mongoose = require('mongoose');
require('dotenv').config();
// TODO: include all model files here (and export models together below)

const projectModel = require(`./project.js`);
const developerModel = require(`./developer.js`);

// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI || "https://sheltered-taiga-43222.herokuapp.com/", {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {
  // TODO: add references to all models here
  Project: projectModel,
  Developer: developerModel
};
