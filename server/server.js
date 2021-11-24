const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");
// const apiRoutes = require("./routes/api.js");

const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

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
