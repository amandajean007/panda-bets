import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      firstName
      lastName
      email
    }
  }
`;

export const QUERY_BETS = gql`
  query getBets {
    bets {
      _id
      name
      amount
    }
  }
`;

export const QUERY_SINGLE_BET = gql`
  query getSingleBet($betId: ID!) {
    bet(betId: $betId) {
      _id
      name
      amount
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      firstName
      lastName
      email
      bets {
        _id
        name
        amount
      }
      followers {
        _id
      }
      friends {
        _id
      } 
    }
  }
`;
