const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    firstname: String!
    lastname: String!
    email: String!
    bets: [Bet]
  }
  type Team {
    _id: ID
    name: String!
    teamScore: String!
    studentCount: Int
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
`;

module.exports = typeDefs;
