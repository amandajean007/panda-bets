import React from 'react';
import "./Home.css";
// import { Link } from 'react-router-dom';


let APIKey = "c8c151ef5d554390b08b821e62264b1f"

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

const queryByeWeek = async (event) => {
  event.preventDefault();

  let queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/Byes/2021REG?key=" + APIKey;

  fetch(queryURL)
  .then(function (response) {
      
    if(response.status !== 200){
      console.log("error");
      } else {
        return response.json();
      }
  })
  .then(function (data) {
      console.log("Bye Weeks: " + data);
  });
}

// function queryOddsByWeek(){
//   let queryURL = "https://api.sportsdata.io/v3/nfl/odds/json/LiveGameOddsByWeek/2021/1?key=" + APIKey;
//   fetch(queryURL)
//   .then(function (response) {
      
//     if(response.status !== 200){
//       console.log("error");
//       } else {
//         return response.json();
//       }
//   })
//   .then(function (data) {
//       console.log("Odds by week: " + data);
//       return data
//   });
// }

const Home = () => {
  return (
    <main>
      <div className="card-body">
          <form onSubmit={queryByeWeek}>
            <input
              className="form-input"
              placeholder="Examples: 2015REG, 2015PRE, 2015POST"
              name="season"
              type="String"
              value={""}
              onChange={queryByeWeek}
            />
            <button
              className="btn btn-block btn-info"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Bye Weeks
            </button>
          </form>
      </div>
    </main>
  );
};



export default Home;
