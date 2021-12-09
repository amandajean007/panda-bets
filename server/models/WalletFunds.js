// const { Schema, model } = require('mongoose');
// const bcrypt = require('bcrypt');
// const mongoose = require('mongoose');

// // Stripe vv
// import stripe from './StripeCheckout';

// const STRIPE_KEY = process.env.STRIPE_KEY;
// const stripe = require('stripe')(STRIPE_KEY);
// const YOUR_DOMAIN = 'http://localhost:4242/';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: 'pr_1234',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/stripesuccess`,
//     cancel_url: `${YOUR_DOMAIN}/stripecancel`,
//   });

//   res.redirect(303, session.url);
// });

// function createSession() {
//   // POST /v1/checkout/sessions
//   const session = stripe.checkout.sessions.create({
//     success_url: 'https://panda-bets.herokuapp.com/success.html',
//     cancel_url: 'https://panda-bets.herokuapp.com/cancel.html',
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price: 'price_xxxxxxxxxxxxx',
//         quantity: 1
//       },
//     ],
//     mode: 'payment',
//   });
//   console.log(session);
// }

// createSession();

// // const walletSchema = new mongoose.Schema(
// //   {
// //     usd: {
// //       type: Number,
// //       required: true,
// //       trim: true
// //     },
// //     bitcoin: {
// //       type: Number,
// //       trim: true
// //     }
// //   }
// // );

// // walletSchema.pre('save', async function (next) {
// //   if (this.isNew || this.isModified('password')) {
// //     const saltRounds = 10;
// //     this.password = await bcrypt.hash(this.password, saltRounds);
// //   }

// //   next();
// // });


// const Wallet = model('Wallet', walletSchema);

// module.exports = Wallet;