import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const ADD_FOLLOWER = gql`
  mutation addFollower($id: Number) {
    addFollower(id: $id) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_FOLLOW = gql`
  mutation addFollow($id: Number) {
    addFollow(id: $id) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BET = gql`
  mutation addBet($betText: String!) {
    addBet(betText: $betText) {
      _id
      betText
      betAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String!) {
    addComment(thoughtId: $thoughtId, commentText: $commentText) {
      _id
      betText
      betAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
