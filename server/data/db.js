const Rider = require("../model/Rider");
const Character = require("../model/Character");
const Generation = require("../model/Generation");

const mongoDataMethods = {
  getAllRiders: async (condition = null) =>
    condition === null ? await Rider.find() : await Rider.find(condition),
  getRidersById: async (id) => await Rider.findById(id),

  getAllCharacters: async (condition = null) =>
    condition === null
      ? await Character.find()
      : await Character.find(condition),
  getCharactersById: async (id) => await Character.findById(id),

  getAllGeneration: async () => await Generation.find(),
  getGenerationById: async (id) => await Generation.findById(id),
  createGeneration: async (args) => {
    const newGeneration = new Generation(args);
    return await newGeneration.save();
  },
  createRider: async (args) => {
    const newRider = new Rider(args);
    return await newRider.save();
  },

  createCharacter: async (args) => {
    const newCharacter = new Character(args);
    return await newCharacter.save();
  },
};

module.exports = mongoDataMethods;
