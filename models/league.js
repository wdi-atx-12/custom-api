const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//LEAGUE SCHEMA
const LeagueSchema = new Schema ({
  name: String,
  established: Number,
  headquarters: String,
  owner: String
});

// var ufcLeague = new db.League ({
//   name: "Ultimate Fighting Championship",
//   established: 1993,
//   headquarters: "Las Vegas",
//   owner: "Danna White"
// })

//LEAGUE MODEL
const League = mongoose.model("League", LeagueSchema);

//MODULE EXPORT
module.exports = {
  League: League
}
