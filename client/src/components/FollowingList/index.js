import React from 'react';
import './style.css';

import '../../App.css';
import 'antd/dist/antd.css';

const Friends = (friends) => {
  if (!friends.length) {
    return (
    <div>
      <h3>No Friends Yet</h3>
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