import React from 'react';
import './style.css';
import '../../App.css';
import 'antd/dist/antd.css';

const Friends = (friends) => {
  if (!friends.length) {
    return (
      <div className="padding">
        <input
        className="padding"
        >
        
        </input><br/>
        <button
        className="btn btn-info padding"
        style={{ cursor: 'pointer' }}
        type="submit"
        >
          Search for users
        </button>
    <div>
      <h3 className="white padding">No Friends Yet</h3>
    </div>
    </div>
    );
  }
    return (
      <header className="text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          {friends}
        </div>
      </header>
    ); 
};

export default Friends;