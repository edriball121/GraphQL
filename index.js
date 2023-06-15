const express = require("express");
const { ApolloServer} = require("apollo-server-express");
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

async function startServer() {
  // Crea una instancia del servidor de Apollo
  const server = new ApolloServer({ typeDefs, resolvers });

  // Crea una instancia de la aplicación Express
  const app = express();
  // Wait for the server to start
  await server.start();

  // Conecta Apollo Server con Express
  server.applyMiddleware({ app });

  // Inicia el servidor
  app.listen({ port: 4000 }, () =>
    console.log(
      `Servidor GraphQL en http://localhost:4000${server.graphqlPath}`
    )
  );
}
startServer();
