const mongoose = require('mongoose');

// const TeamSchema = new mongoose.Schema ({
//   _id: Number,
//   established: Number,
//   foundedBy: String,
//   facilities: String
// });

const FighterSchema = new mongoose.Schema ({
  firstName: String,
  lastName: String
  // league_id: Number,
  // titleHolder: Boolean,
  // country: String,
  // team_id: Number,
  // record: String,
  // koPercentage: Number,
  // height: Number,
  // weight: Number
});

// const LeagueSchema = new mongoose.Schema ({
//   _id: Number,
//   name: String,
//   established: Number,
//   headquarters: String,
//   owner: String
// });


// const TestSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   count: {
//     type: Number,
//     default: 42
//   },
//   time: {
//     type: Date,
//     default: Date.now
//   }
// });

const Test = mongoose.model('Test', FighterSchema);

module.exports = {
  Test: Test
}
