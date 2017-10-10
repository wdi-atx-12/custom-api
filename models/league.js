const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//LEAGUE SCHEMA
const LeagueSchema = new Schema ({
  name: String,
  established: Number,
  headquarters: String,
  owner: String
});

//LEAGUE MODEL
const League = mongoose.model("League", LeagueSchema);

//MODULE EXPORT
module.exports = {
  League: League
}
