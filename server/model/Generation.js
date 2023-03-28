const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenerateSchema = new Schema({
  name: {
    type: String,
  },
  time: {
    type: String,
  },
});

module.exports = mongoose.model("generates", GenerateSchema);
