import "../App.css"

let APIKey = "c8c151ef5d554390b08b821e62264b1f";

async function fantasyDefenseProjectionsByGame() {
	let season = await document.getElementById("season");
	let week = await document.getElementById("week");
	let queryURL = "https://api.sportsdata.io/v3/nfl/projections/json/FantasyDefenseProjectionsByGame/" + season + "/" + week + "?key=" + APIKey;
  
	fetch(queryURL)
	.then(function (response) {
		
	  if(response.status !== 200){
		console.log("error collecting bye-weeks");
		} else {
		  return response.json();
		}
	})
	.then(function (data) {
		console.log(data);
	});
  }

async function bettingMetadata() {
	let queryURL = "https://api.sportsdata.io/v3/nfl/odds/json/BettingMetadata?key=" + APIKey;
  
	fetch(queryURL)
	.then(function (response) {
		
	if(response.status !== 200){
		console.log("error collecting metadata");
		} else {
		  return response.json();
		}
	})
	.then(function (data) {
		console.log(data);
	});
}

  const Projections = () => {
	return (
	  <main>
		<div className="card-body padding title">
			Projected Fantasy Defense Game Stats (w/ DFS Salaries)
			<form onSubmit={fantasyDefenseProjectionsByGame}>
			<input
				className="form-input"
				placeholder="Examples: 2015REG, 2015PRE, 2015POST"
				name="season"
				type="text"
				id="season"
			/>
			<input
				className="form-input"
				placeholder="Examples: 1, 2, 3"
				name="week"
				type="text"
				id="week"
			/>
			<button
				className="btn btn-block btn-info"
				style={{ cursor: 'pointer' }}
				type="submit"
			>
				Get Stats
			</button>
			</form>
		</div>

		<div className="card-body padding title">
		Aggregated Odds, Consensus Odds
			<form onSubmit={bettingMetadata}>
				<button
					className="btn btn-block btn-info"
					style={{ cursor: 'pointer' }}
					type="submit"
				>
					Get Stats
				</button>
			</form>
		</div>

	  </main>
	);
  };
  
  
  
  export default Projections;
  