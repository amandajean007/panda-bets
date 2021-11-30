import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="center">
          <ul className="flex-row center">
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/myfriends">
                  My Friends
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3"> 
                <Link to="/mybets">
                  My Bets
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/mywallet">
                  My Wallet
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/home">
                  Homepage
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/news">
                  News
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/aboutBetting">
                  About Betting
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/bettingSuggestions">
                  Betting Suggestions
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/trendingBets">
                  Betting Trends
                </Link>
              </button>
            </ul>
            <ul className="mx-1">
              <button className="btn btn-primary btn-block py-3">
                <Link to="/golfPanda">
                  Golf Panda
                </Link>
              </button>
            </ul>
          </ul>
        </div>
      );
    } else {
      console.log("error!");
    }
  }

  return (
    <header className="flex-row px-1 padding">
 

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
