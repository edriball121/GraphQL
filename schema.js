const { gql } = require("apollo-server-express");

// Define el esquema GraphQL
const typeDefs = gql`
  type Persona {
    id: ID!
    document: Int!
    name: String!
    lastName: String!
    phone: String!
    email: String!
  }

  type Query {
    saludo: String
    obtenerPersonas: [Persona!]!
    obtenerPersona(id: ID!): Persona
  }
  type Mutation {
    insertarPersona(input: InsertarPersonaInput!): Persona!
    actualizarPersona(id: ID!, input: ActualizarPersonaInput!): Persona!
    eliminarPersona(id: ID!): Persona!
  }

  input InsertarPersonaInput {
    document: Int!
    name: String!
    lastName: String!
    phone: String!
    email: String!
  }
  input ActualizarPersonaInput {
    document: Int
    name: String
    lastName: String
    phone: String
    email: String
  }
`;
module.exports = typeDefs;
