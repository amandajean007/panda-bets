// import React from 'react';
// import { Link } from 'react-router-dom';

// const BetList = ({
//   bets,
//   title,
//   showTitle = true,
//   showUsername = true,
// }) => {
//   if (!bets) {
//     return <h3>No Bets Yet</h3>;
//   } else

//   return (
//     <div>
//       {showTitle && <h3>{title}</h3>}
//       {bets &&
//         bets.map((bet) => (
//           <div key={bet._id} className="card mb-3">
//             <h4 className="card-header bg-primary text-light p-2 m-0">
//               {showUsername ? (
//                 <Link
//                   className="text-light"
//                   to={`/profiles/${bet.betAuthor}`}
//                 >
//                   {bet.betAuthor} <br />
//                   <span style={{ fontSize: '1rem' }}>
//                     made this bet on {bet.createdAt}
//                   </span>
//                 </Link>
//               ) : (
//                 <>
//                   <span style={{ fontSize: '1rem' }}>
//                     You made this bet on {bet.createdAt}
//                   </span>
//                 </>
//               )}
//             </h4>
//             <div className="card-body bg-light p-2">
//               <p>{bet.betText}</p>
//             </div>
//             <Link
//               className="btn btn-primary btn-block btn-squared"
//               to={`/bets/${bet._id}`}
//             >
//               Join the discussion on this bet.
//             </Link>
//           </div>
//         ))}
//     </div>
//   );
// };

// export default BetList;
