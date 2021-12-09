import React from 'react';
import "./Home.css";
// import { Link } from 'react-router-dom';


let APIKey = "c8c151ef5d554390b08b821e62264b1f"

function queryTodaysGames(){
  let queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/AreAnyGamesInProgress?key=" + APIKey;
  fetch(queryURL)
  .then(function (response) {
      
    if(response.status !== 200){
      console.log("error collecting games");
      } else {
        return response.json();
      }
  })
  .then(function (data) {
      console.log("Games in progress: " + data);
  });
}

async function queryByeWeek (){
  let season = await document.getElementById("season");
  let queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/Byes/" + season + "?key=" + APIKey;

  fetch(queryURL)
  .then(function (response) {
      
    if(response.status !== 200){
      console.log("error collecting bye-weeks");
      } else {
        return response.json();
      }
  })
  .then(function (data) {
      console.log("Bye Weeks: " + data);
  });
}

async function newsByTeam() {
  let team = await document.getElementById("team");
  let queryURL = "https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/" + team + "?key=" + APIKey;
  fetch(queryURL)
  .then(function (response) {
      
    if(response.status !== 200){
      console.log("error finding news by team");
      } else {
        return response.json();
      }
  })
  .then(function (response) {
      console.log("News by Team: " + response);
      return response
  });
}

const Home = () => {
  return (
    <main>


      {/* <div className="card-body">
          <form onSubmit={queryTodaysGames}>
            <button
              className="btn btn-block btn-info"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Games in Play
            </button>
          </form>

          <form onSubmit={queryByeWeek}>
            <input
              className="form-input"
              placeholder="Examples: 2015REG, 2015PRE, 2015POST"
              name="season"
              type="text"
              id="season"
            />
            <button
              className="btn btn-block btn-info"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              Bye Weeks
            </button>
          </form>

          <form onSubmit={newsByTeam}>
            <input
              className="form-input"
              placeholder="Examples: WAS, DEN"
              name="season"
              type="text"
              id="team"
            />
            <button
              className="btn btn-block btn-info"
              style={{ cursor: 'pointer' }}
              type="submit"
            >
              News by Team
            </button>
          </form>
      </div>
      <div>
        Hello
      </div> */}
    </main>
  );
};



export default Home;
