import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import '../../App.css';
import 'antd/dist/antd.css';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0 pandabets text-light">Panda Bets</h1>
          </Link>
          <p className="m-0">sports betting playground</p>
        </div>

        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn m-2" to="/me">
                {Auth.getProfile().data.firstName}'s profile
              </Link>
              <button className="btn btn m-2" onClick={logout}>
                Logout
              </button>
              <Link className="btn m-2" to="/home">
                Home
              </Link>
              <Link className="btn m-2" to="/myfriends">
                Friends
              </Link>
              <Link className="btn m-2" to="/mybets">
                Bets
              </Link>
              <Link className="btn m-2" to="/mywallet">
                Wallet
              </Link>
              <Link className="btn m-2" to="/news">
                Sports News
              </Link>
              <Link className="btn m-2" to="/projections">
                Projections
              </Link>
              <Link className="btn m-2" to="/trendingBets">
                Trending
              </Link>
              <Link className="btn m-2" to="/golfPanda">
                Golf Panda
              </Link>


            </>
          ) : (
            <>
              <Link className="btn  m-2" to="/login">
                Login
              </Link>
              <Link className="btn m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
