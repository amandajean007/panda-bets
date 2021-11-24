const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bets: [Bet]
  }
  type Team {
    _id: ID
    name: String!
    teamScore: Int
  }
  type Player {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
  }
  type Bet {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
  }

  type Query {
    bets: [Bet]
    users: [User]
    teams: [Team]
    players: [Player]
  }

  type Mutation {
    addUser: [User]
    login: [User]
    removeUser: [User]
  }
`;

module.exports = typeDefs;
