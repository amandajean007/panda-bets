import Auth from '../utils/auth'

const Bet = () => {
  return (
    <div>
       <body className="padding">
        <div class="wrapper">
          <div class="total">
            <div class="total">Your total funds available to bet: $<span id="total">0</span></div>
          </div>
          
          <div class="form">
            <input type="text" id="t-name" placeholder="Name of Bet" />
            <input type="number" min="0" id="t-amount" placeholder="Bet amount" />
            <button id="add-btn" className="btn m-2"><i class="fa fa-plus buttons"></i>{Auth.getProfile().data.firstName} bets...</button>
            <p class="error"></p>
          </div>

          <div class="transactions">
            <table>
              <thead>
                <th>Bet</th>
                <th>Amount</th>
              </thead>
              <tbody id="tbody">
              </tbody>
            </table>
          </div>
          {/* <canvas id="myChart"></canvas> */}
        </div>

  <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
  <script src="./dist/bundle.js"></script>
  <script src="index.js"></script>
  <script src="db.js"></script>
  <script>
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("service-worker.js").then(reg => {
          console.log("We found your service worker file!", reg);
        });
      })
    }
  </script>

      </body>
    </div>
  )
}

export default Bet;