const mongoose = require(`mongoose`);
const Schema = mongoose.Schema();

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  developers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Developer'
  }]
})

const Project = mongoose.model('Project', ProjectSchema);


module.exports = Project;
