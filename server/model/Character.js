const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
  name: {
    type: String,
  },
  job: {
    type: String,
  },
  riderId: {
    type: String,
  },
  generateId: {
    type: String,
  },
});

module.exports = mongoose.model("characters", CharacterSchema);
