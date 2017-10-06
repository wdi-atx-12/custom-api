const mongoose = require(`mongoose`);
const Schema = mongoose.Schema();

const DevSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  gitHub: {
    type: String,
    required: true
  },
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }]
})

const Developer = mongoose.model('Developer', DevSchema);
module.exports = Developer;
