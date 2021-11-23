const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    fistname: {
      type: String,
      required: true,
      trim: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    bets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bet'
      }
    ]
  }
);

const User = model('User', userSchema);

module.exports = User;
