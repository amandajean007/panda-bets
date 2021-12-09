const express = require('express');
const app = express();
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const compression = require("compression");
const cors = require('cors');

const uuid = require('uuid');

// const STRIP_API_SECRET = process.env.STRIP_API_SECRET
const stripe = require('stripe')(process.env.STRIP_API_SECRET);
// mongoose keeping track of betSchema
const logger = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api.js");
app.use(logger("dev"));


mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!');
});

app.use(apiRoutes);

// Stripe
const STRIPE_KEY = process.env.STRIPE_KEY;
const YOUR_DOMAIN = 'http://localhost:4242/';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: '{{PRICE_ID}}',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/stripesuccess`,
    cancel_url: `${YOUR_DOMAIN}/stripecancel`,
  });

  res.redirect(303, session.url);
});


// 
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;


// // socket.io
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// middleware
server.applyMiddleware({ app });
app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());
// app.use(apiRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}


// routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/payment', (req, res) => {

  const {product, token} = req.body;
  console.log("PRODUCT ", product);
  console.log("PRICE ", price);
  const idempontencyKey = uuid()

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    stripe.charges.create({
      amount: product.price * 100,
      currency: 'usd',
      customer: customer.id,
      receipt_email: token.email, password,
      description: `purchase of product.name`
    }, {idempontencyKey})
  })
  .then(result => res.status(200).json(result))
  .catch(err=>console.log(err))

})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running at http://localhost:` + PORT + ` !`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// listen
app.listen(4242, () => console.log('Stripe running on port http://localhost:4242/'));