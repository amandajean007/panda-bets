const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const betSchema = new Schema(
    {
        name: {
          type: String,
          trim: true,
          required: "Enter a name for the bet"
        },
        amount: {
          type: Number,
          required: "Enter an amount to bet"
        }
      }
);

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;