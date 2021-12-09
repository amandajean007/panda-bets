const { AuthenticationError } = require('apollo-server-express');
const { User, Bet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    bets: async () => {
      return await Bet.find({});
    },
    // friends: async () => {
    //   return await User.find({});
    // }
  },
  
  Mutation: {
// USERS
    addUser: async (parent, { firstName, lastName, email, password }) => {
      const user = await User.create({ firstName, lastName, email, password });
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Email or password incorrect, please try again.');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Email or password incorrect, please try again.');
      }

      const token = signToken(user);
      return { token, user };
    },

    removeUser: async (parent, { email }) => {
      return await User.findOneAndDelete({ email: email});
    },

// FRIENDS FOLLOWERS  use   .populate()
    // addFollower: async (User, { _id }) => {
    //   return await User.findOneAndUpdate(
    //     { _id: _id },
    //     {
    //       $addToSet: { followers: User._id }
    //     } 
    //   );
    // },

    // addFriend: async (parent, { _id }) => {
    //   return await User.findOneAndUpdate(
    //     { _id: _id },
    //     {
    //       $addToSet: { friends: User }
    //     }
    //   );
    // },

// BETS
    addBet: async (parent, { userId, bet }) => {
      return await User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { bets: bet },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeBet: async (parent, { profileId, bet }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
        { $pull: { bets: bet } },
        { new: true }
      );
    },
  }
};


module.exports = resolvers;
