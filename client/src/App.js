import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { moneyToBet } from './pages/Bet'

//

// import pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';

// Stripe
import StripeCheckout from "react-stripe-checkout";
import React, { useState } from "react";

// import News from './pages/News';
import Bet from './pages/Bet';
import Projections from './pages/Projections';
import Profile from './pages/Profile';
import StripeCancel from './pages/StripeCancel';
import StripeSuccess from './pages/StripeSuccess';
// import Wallet from './pages/Wallet';

// import components
import Header from './components/Header';
import Footer from './components/Footer';
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
  const money = document.querySelector("moneyToBet");

  const [product] = useState ({
    name: "Tom Brady goin' down!",
    price: money
  })

  const makePayment = token => {
    const body = {
      token,
      product
    }
    const headers = {
      "Content-Type": "application/json"
    }

    return fetch(`http://localhost:4242/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }).then(response => {
      console.log("RESPONSE ", response)
      const {status} = response;
      console.log("STATUS ", status)
    })
    .catch(error => console.log(error))
  }



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
        <Route exact path="/bet">
          <Bet />
        </Route>
        <Route exact path="/me/:email">
          <Profile />
        </Route>
        <Route exact path="/stripecancel">
          <StripeCancel />
        </Route>
        <Route exact path="/stripesuccess">
          <StripeSuccess />
        </Route>
        <Route exact path="/bet">
          <StripeCheckout
            stripeKey={'pk_test_51K32WEEQDZ0z8LDS2i2RbbS1q4SK60c2uqLjAWwokMudqEdYlOO33lrcZ30vNTd2KxEiH2XfokzFWDR80RC5nu9P004pTNtfRH'}
            token={makePayment}
            name="Bet Bundle"
            amount={product.price * 100}
          >
            <div className="padding">
              <button className="btn btn-danger">Place All Bets <br/>Total: ${product.price}</button>
            </div>
          </StripeCheckout>
        </Route>
        {/* <Route exact path="/mywallet">
          <Wallet />
        </Route> */}
        </div>

        <Footer />
        </div>

      </Router>
    </ApolloProvider>
  );
}

export default App;
