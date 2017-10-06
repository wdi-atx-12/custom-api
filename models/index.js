const mongoose = require('mongoose');
require('dotenv').config();
// TODO: include all model files here (and export models together below)
const models = require('./');


// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});
module.exports.Book = require("./book.js");

module.exports.Author = require("./author.js");
module.exports = {
  Desert: models.Desert,
  Drink: models.Drink,
  Topping: models.Topping,
  Sandwich: models.Sandwich,
  Order: models.Order,
  SandwichMenu: models.SandwichMenu
};
