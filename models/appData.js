const mongoose = require(`mongoose`);
const Schema = mongoose.Schema();

const AppSchema = ({
  name: {
    type: String,
    required: true
  },
  category: {
    type: [],
    default: ["Indie"]
  }
})

exports.AppSchema = App;
