import React, { useState } from 'react';
import "../App.css"
const APIKey = "3593b7aca7msh6dcc699ed4295a8p1306e2jsne0bcb0b6dffc"
var sport = document.getElementById('sport');

// API function
function NflOdds() {

  // fetch request as a variable
  var requestUrl = 'https://rapidapi.com/theoddsapi/api/live-sports-odds/' + sport + '?key=' + APIKey;
  // APi key as a variable

// API fetch
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      }
    );
}

const Projections = () => {
	const [formState, setFormState] = useState({ sport: ''});
// update state based on form input changes
	const handleChange = (event) => {
    const { sport, value } = event.target;

    setFormState({
      ...formState,
      [sport]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await NflOdds({
        variables: { ...formState },
      });
      JSON.stringify(data)
      console.log(data)
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      sport: '',
    });
  }

	return (
		<main>
		<div className="card-body padding title">
			Live Sports Odds
			<form onSubmit={handleFormSubmit}>
				<input
					placeholder="americanfootball_nfl"
					value={sport}
					className="form-input w-100"
					onChange={handleChange}
					id="sport"
				/>
				<button
					className="btn btn-block btn-info"
					style={{ cursor: 'pointer' }}
					type="submit"
				>
				Get Odds
			</button>
			</form>
		</div>
		</main>
	);
};



export default Projections;