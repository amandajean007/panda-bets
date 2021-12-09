import React, { useState} from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_BET } from '../utils/mutations';
import { QUERY_BETS } from '../utils/queries';
// Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
import withAuth from '../utils/auth';
import '../App.css';
import { Link } from 'react-router-dom';

const BetList = ({
    bets,
    title,
    showTitle = true,
    showUsername = true,
  }) => {

    const [formState, setFormState] = useState({
      name: '',
      amount: ''
    });
    const [addBet] = useMutation(ADD_BET);
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log("form state: " + formState);
  
      try {
        const { data } = await addBet({
          variables: { ...formState },
        });
        JSON.stringify(data);
        console.log("data ", data);
        // Auth.login(data.addBet.token);
        // console.log("data.addbet.token: " + data.addBet.token);
      } catch (error) {
        console.error(error);
        console.log("error with handleSubmit");
      }
  
    };
  
    // // return all Bets
    // const { betId } = useParams();
  
    const { data } = useQuery(QUERY_BETS);

  if (!bets) {
    return (
      <div className="col-12 col-lg-10">
        <div className="padding">
          <h4 className="padding white title">Place Your Bets</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="What do you bet?"
                name="name"
                type="text"
                value={formState.name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="How much?"
                name="amount"
                type="text"
                value={formState.amount}
                onChange={handleChange}
              />
              <button
                className="btn btn-primary"
                style={{ cursor: 'pointer' }}
                type="submit"
                id="add-btn"
              >
                Add bet to list
              </button>
            </form>
          </div>
          <h3 className="white padding">No Bets Yet</h3>
        </div>
      </div>
    );
  } else

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {bets &&
        bets.map((bet) => (
          <div key={bet._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${bet.betAuthor}`}
                >
                  {bet.betAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    made this bet on {bet.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You made this bet on {bet.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{data}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/bets/${bet._id}`}
            >
              Join the discussion on this bet.
            </Link>
          </div>
        ))}
    </div>
  );
// };
//   return (
//     <main className="flex-row justify-center mb-4">
      // <div className="col-12 col-lg-10">
      //   <div className="padding">
      //     <h4 className="padding white title">Place Your Bets</h4>
      //     <div className="card-body">
//             {loading ? (
//               <p className="white padding">
//                 Loading...
//               </p>
//             ) : (
              // <form onSubmit={handleFormSubmit}>
              //   <input
              //     className="form-input"
              //     placeholder="What do you bet?"
              //     name="name"
              //     type="text"
              //     value={formState.name}
              //     onChange={handleChange}
              //   />
              //   <input
              //     className="form-input"
              //     placeholder="How much?"
              //     name="amount"
              //     type="text"
              //     value={formState.amount}
              //     onChange={handleChange}
              //   />
              //   <button
              //     className="btn btn-primary"
              //     style={{ cursor: 'pointer' }}
              //     type="submit"
              //     id="add-btn"
              //   >
              //     Add bet to list
              //   </button>
              // </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
// {/* List of Bets */}
//           <div className="my-3">
//             <h3 className="card-header bg-dark text-light p-2 m-0">
//               Current Bets<br />
//             </h3>
//             <div className="bg-light py-4">

//               <blockquote
//                 style={{
//                   fontSize: '1.5rem',
//                   border: '2px solid'
//                 }}
//                 className="padding"
//               >
//                 {bet.name}
//                 {bet.amount}
//               <button className="btn btn-primary padding">
//                 Collect
//               </button>
//               </blockquote>
              
              
//             </div>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
};

export default BetList;