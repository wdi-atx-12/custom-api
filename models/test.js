const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//FIGHTER SCHEMA
const FighterSchema = new Schema ({
  firstName: String,
  lastName: String,
  league: {
    type: Schema.ObjectId,
    ref: "League"
  },
  titleHolder: Boolean,
  country: String,
  team: {
    type: Schema.ObjectId,
    ref: "Team"
  },
  record: String
});

//FIGHTER MODEL
const Fighter = mongoose.model('Fighter', FighterSchema);

module.exports = {
  Fighter: Fighter
}
