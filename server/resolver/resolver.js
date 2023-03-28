const resolvers = {
  //Query
  Query: {
    riders: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllRiders(),
    rider: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getRidersById(id),

    characters: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllCharacters(),
    character: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getCharactersById(id),

    generates: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllGeneration(),
    generate: async (parent, { id }, { mongoDataMethods }) =>
      await mongoDataMethods.getGenerationById(id),
  },

  Rider: {
    character: async ({ characterId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getCharactersById(characterId),
    generate: async ({ generateId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getGenerationById(generateId),
  },

  Character: {
    rider: async ({ riderId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getRidersById(riderId),
    generate: async ({ generateId }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getGenerationById(generateId),
  },

  Generation: {
    riders: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllRiders({ generateId: id }),
    characters: async ({ id }, args, { mongoDataMethods }) =>
      await mongoDataMethods.getAllCharacters({ generateId: id }),
  },

  //Mutation
  Mutation: {
    createGeneration: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createGeneration(args),
    createRider: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createRider(args),
    createCharacter: async (parent, args, { mongoDataMethods }) =>
      await mongoDataMethods.createCharacter(args),
  },
};

module.exports = resolvers;
