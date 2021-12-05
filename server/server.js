const express = require('express');
const app = express();
// // For use with socket.io
// const http = require('http');
// const server = http.createServer(app);
// // ^^^
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");
// const apiRoutes = require("./routes/api.js");

// Stripe
const stripe = require('stripe')('sk_test_51K32WEEQDZ0z8LDS4F3uc9YdN2lM2SDgwjXLFGDsXyIW1MyStjKThZNynV1oLmj4sIj3aAh8D4Th7VbRHDuO1VOj00yBvVKxFc');

const YOUR_DOMAIN = 'http://localhost:4242';

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
    success_url: `${YOUR_DOMAIN}/success.html`,
    cancel_url: `${YOUR_DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));
// Stripe^^

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

// // Socket.io
// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });
// // ^^^

app.use(logger("dev"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(compression());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}



app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.use(apiRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running at http://localhost:` + PORT + ` !`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

// // For use with socket.io
// server.listen(3000, () => {
//   console.log('listening on *:3000');
// });
// // ^^^