const mongoose = require(`mongoose`);
const Schema = mongoose.Schema();

const DevSchema = ({
  name: {
    type: String,
    required: true
  },
  gitHub: {
    type: String,
    required: true
  }
})

exports.DevSchema = Dev;
