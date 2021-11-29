// let APIKey = "c8c151ef5d554390b08b821e62264b1f"

// function queryTodaysGames(){
//   let queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/AreAnyGamesInProgress?key=" + APIKey;
//   fetch(queryURL)
//   .then(function (response) {
      
//     if(response.status !== 200){
//       } else {
//         return response.json();
//       }
    
//   })
//   .then(function (data) {
//       console.log("Games in progress: " + data);
//   });
// }

// queryTodaysGames()


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
      console.log("Scores and Stats: " + data)
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