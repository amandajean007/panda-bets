const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true
    },
    bets: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Bet'
      }
    ]
    // friends: [
    //   {
    //     type: mongoose.Schema.ObjectId, ref: 'User'
    //   }
    // ],
    // followers: [
    //   {
    //     type: mongoose.Schema.ObjectId, ref: 'User'
    //   }
    // ]
  }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};


const User = model('User', userSchema);

module.exports = User;
