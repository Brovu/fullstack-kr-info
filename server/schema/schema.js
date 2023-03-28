const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Rider {
    id: ID
    name: String
    power: String
    character: Character
    generate: Generation
  }

  type Character {
    id: ID!
    name: String
    job: String
    rider: Rider
    generate: Generation
  }

  type Generation {
    id: ID!
    name: String
    time: String
    riders: [Rider]
    characters: [Character]
  }

  #Root type
  type Query {
    rider(id: ID!): Rider
    riders: [Rider]
    character(id: ID!): Character
    characters: [Character]
    generate(id: ID!): Generation
    generates: [Generation]
  }

  type Mutation {
    createGeneration(name: String, time: String): Generation
    createRider(name: String, power: String, generateId: ID!): Rider
    createCharacter(
      name: String
      job: String
      riderId: ID!
      generateId: ID!
    ): Character
  }
`;

module.exports = typeDefs;
