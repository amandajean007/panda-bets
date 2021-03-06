import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../App.css'

// import BetForm from '../components/Bets';
import BetList from '../components/BetList';
import FollowersList from '../components/FollowersList';
import FollowingList from '../components/FollowingList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  // redirect to personal profile page if email is yours
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Redirect to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4 className="white padding">
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div className="title">
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-dark text-light p-3 mb-5 ">
          Viewing {userParam ? `${user.firstName}'s` : 'your'} profile.
        </h2>

        <div className="col-12 col-md-10 mb-5">
          <BetList
            bets={user.bets}
            title={`${user.email}'s bets...`}
          />
          <FollowingList
            friends={user.friends}
            title={`${user.firstName}'s friends...`}
          />
          <FollowersList
            followers={user.followers}
            title={`${user.firstName}'s followers...`}
          />
        </div>
        {!userParam && (
          <div
            className="col-12 col-md-10 mb-3 p-3"
            style={{ border: '1px dotted #1a1a1a' }}
          >
            {/* <BetForm /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
