const { AuthenticationError } = require('apollo-server-express');
const { User, Team, Player, Bet } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    teams: async () => {
      return await Team.find({});
    },
    players: async () => {
      return await Player.find({});
    },
    bets: async () => {
      return await Bet.find({});
    },
    // friends: async () => {
    //   return await User.find({});
    // }
  },
  
  Mutation: {
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

    // addFriend: async (parent, { userId, User }) => {
    //   return await User.findOneAndUpdate(
    //     { _id: userId },
    //     {
    //       $addToSet: { friends: User }
    //     }
    //   );
    // },

    removeUser: async (parent, { userId }) => {
      return await User.findOneAndDelete({ _id: userId });
    },

    addBet: async (parent, { profileId, bet }) => {
      return Profile.findOneAndUpdate(
        { _id: profileId },
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
