const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//TEAM SCHEMA
const TeamSchema = new Schema ({
  established: Number,
  foundedBy: String,
  facilities: String
});

//TEAM MODULE
const Team = mongoose.model('Team', TeamSchema);

//EXPORT MODULE
module.exports = {
  Team: Team
}
