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
    }
  }
};

module.exports = resolvers;
