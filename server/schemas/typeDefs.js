const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    bets: [Bet]
    # followers: [User]
    # friends: [User]
  }
  type Bet {
    _id: ID!
    name: String!
    amount: Int!
    # won: Boolean
  }

  # Set up an Auth type to handle returning data from a profile creating or user login
  type Auth {
  token: ID!
  user: User
}

  type Query {
    bets: [Bet]
    bet(_id: ID!): Bet
    users: [User]
    user(_id: ID): User
    # friends: [User]
    # friend(_id: ID!): User
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth,
    login(email: String!, password: String!): Auth,
    removeUser(email: String!): User,
    
    addBet(name: String!, amount: Int!): User,
    removeBet(userid: ID!, name: String!): User,

    # addFollower(_id: ID!): User,
    # addFollow(_id: ID!): User,
    # removeFriend(_id: ID!, friend: String): User,
  }
`;

module.exports = typeDefs;
