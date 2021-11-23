// import React from 'react';

// // Import the `useParams()` hook
// import { useParams } from 'react-router-dom';
// import { useQuery } from '@apollo/client';

// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';

// import { QUERY_SINGLE_THOUGHT } from '../utils/queries';



// Where the info is going to be displayed
var tableBody = document.getElementById('repo-table');
// fetch button
var fetchButton = document.getElementById('fetch-button');

const Bet = () => {
// API function
function getApi() {
  // fetch request as a variable
  var requestUrl = 'https://sportsdata.io/scores-and-stats';
  // APi key as a variable

// API fetch
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      //Loop over the data to generate a table, each table row will have a link to the repo url
      for (var i = 0; i < data.length; i++) {
        // Creating elements, tablerow, tabledata, and anchor
        var createTableRow = document.createElement('tr');
        var tableData = document.createElement('td');
        var link = document.createElement('a');

        // Setting the text of link and the href of the link
        link.textContent = data[i].html_url;
        link.href = data[i].html_url;

        // Appending the link to the tabledata and then appending the tabledata to the tablerow
        // The tablerow then gets appended to the tablebody
        tableData.appendChild(link);
        createTableRow.appendChild(tableData);
        tableBody.appendChild(createTableRow);
      }
    });
}

fetchButton.addEventListener('click', getApi);
}
export default Bet;


// const SingleThought = () => {
//   // Use `useParams()` to retrieve value of the route parameter `:profileId`
//   const { thoughtId } = useParams();

//   const { loading, data } = useQuery(QUERY_SINGLE_THOUGHT, {
//     // pass URL parameter
//     variables: { thoughtId: thoughtId },
//   });

//   const thought = data?.thought || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }
//   return (
//     <div className="my-3">
//       <h3 className="card-header bg-dark text-light p-2 m-0">
//         {thought.thoughtAuthor} <br />
//         <span style={{ fontSize: '1rem' }}>
//           had this thought on {thought.createdAt}
//         </span>
//       </h3>
//       <div className="bg-light py-4">
//         <blockquote
//           className="p-4"
//           style={{
//             fontSize: '1.5rem',
//             fontStyle: 'italic',
//             border: '2px dotted #1a1a1a',
//             lineHeight: '1.5',
//           }}
//         >
//           {thought.thoughtText}
//         </blockquote>
//       </div>

//       <div className="my-5">
//         <CommentList comments={thought.comments} />
//       </div>
//       <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
//         <CommentForm thoughtId={thought._id} />
//       </div>
//     </div>
//   );
// };

// export default SingleThought;
