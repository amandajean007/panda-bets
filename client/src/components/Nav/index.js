import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <ul className="mx-1">
            <button>
              <Link to="/myfriends">
                My Friends
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button> 
              <Link to="/mybets">
                My Bets
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button>
              <Link to="/mywallet">
                My Wallet
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button>
              <Link to="/home">
                Homepage
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button>
              <Link to="/news">
                News
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button>
              <Link to="/aboutBetting">
                About Betting
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button>
              <Link to="/bettingSuggestions">
                Betting Suggestions
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button>
              <Link to="/trendingBets">
                Trending Bets
              </Link>
            </button>
          </ul>
          <ul className="mx-1">
            <button>
              <Link to="/golfPanda">
                Golf Panda
              </Link>
            </button>
          </ul>
        </ul>
      );
    } else {
      console.log("error!");
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/Bet">
          <span role="img" aria-label="money eyes">🤑</span>
          -Place Bets
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
