const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RiderSchema = new Schema({
  name: {
    type: String,
  },
  power: {
    type: String,
  },
  characterId: {
    type: String,
  },
  generateId: {
    type: String,
  },
});

module.exports = mongoose.model("riders", RiderSchema);
