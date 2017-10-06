const mongoose = require('mongoose');
require('dotenv').config();

// connect to Mongo DB
mongoose.connection.openUri(process.env.MONGODB_URI || process.env.DB_CONN, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {
  Account: require('./account').Account,
  Transaction: require('./recurrence').Transaction,
  Recurrence: require('./recurrence').Recurrence,
};
