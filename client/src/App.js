import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
// import News from './pages/News';
// import Bet from './pages/Bet';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Projections from './pages/Projections';
import Friends from './components/FollowingList';
import Followers from './components/FollowersList';
import "./App.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});


// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});



const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>

        <div className="flex-column justify-flex-start min-100-vh soccerfield">
        <Header />

        <div className="container">
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/myfriends">
          <Friends />
        </Route>
        <Route exact path="/myfriends">
          <Followers />
        </Route>
        <Route exact path="/projections">
          <Projections />
        </Route>
        {/* <Route exact path="/news">
          <News />
        </Route> */}
        <Route exact path="/signup">
          <Signup />
        </Route>
        {/* <Route exact path="/Bet">
          <Bet />
        </Route> */}
        <Route exact path="/profiles/:email">
          <Profile />
        </Route>
        </div>

        <Footer />
        </div>

      </Router>
    </ApolloProvider>
  );
}

export default App;
