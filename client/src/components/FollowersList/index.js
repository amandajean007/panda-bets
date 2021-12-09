import React from 'react';
import './style.css';


import '../../App.css';
import 'antd/dist/antd.css';

const Followers = (followers) => {
  if (!followers.length) {
    return <h3 className="white padding">No Followers Yet</h3>;
  }
    return (
      <header className="text-light mb-4 py-3 flex-row align-center">
        <div className="container flex-row justify-space-between-lg justify-center align-center">
          {followers}
        </div>
      </header>
    );
};

export default Followers;