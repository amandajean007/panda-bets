import React from 'react';
import { queryTodaysGames } from '../../pages/Bet'

const GameList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <>
      <h3>
        Comments
      </h3>
    </>
  );
};

export default CommentList;
