const { User, Team, Player, Bet } = require('../models');

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
  },
  
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Email or password incorrect, please try again. :)');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Email or password incorrect, please try again. :)');
      }

      const token = signToken(user);
      return { token, user };
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  }
};


module.exports = resolvers;
