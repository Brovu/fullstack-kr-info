const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const db = require("./db/index");

//Load Schema & Resolver
const typeDefs = require("./schema/schema");
const resolvers = require("./resolver/resolver");
const mongoDataMethods = require("./data/db");

db.connect();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ mongoDataMethods }),
});

const app = express();
server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });
});
