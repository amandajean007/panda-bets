const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const betSchema = new Schema(
    {
        teamBet: {
            type: Schema.Types.ObjectId,
            ref: 'Team'
        },
        playerBet: {
            type: Schema.Types.ObjectId,
            ref: 'Player'
        },
        ammount: {
            type: Number,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    }
);

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;