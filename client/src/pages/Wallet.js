import "../App.css"

// Stripe
// const stripe = require('stripe')('sk_test_51K32WEEQDZ0z8LDS4F3uc9YdN2lM2SDgwjXLFGDsXyIW1MyStjKThZNynV1oLmj4sIj3aAh8D4Th7VbRHDuO1VOj00yBvVKxFc');

// POST /v1/checkout/sessions
// const session = stripe.checkout.sessions.create({
//   success_url: 'https://example.com/success',
//   cancel_url: 'https://example.com/cancel',
//   line_items: [
//     {price: 'price_H5ggYwtDq4fbrJ', quantity: 2},
//   ],
//   mode: 'payment',
// });
// ^^

// const session = await stripe.checkout.sessions.expire(
//   'cs_test_a13hqd3798PMiVEmXdmd4tEmpnaO7JvLeix1gNmuCFoGnAl6A8iH7wVlmb'
// );


const funds = ""


const Wallet = () => {

  return (
    <div>
      <header className="white padding title">
        Available funds: {funds}
      </header>
      <div className="white padding">
        <form>
        {/* <form onSubmit={}> */}
          <button
            className="btn btn-block btn-info padding add-btn"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Add funds
          </button>
          <input
            className="form-input"
            placeholder="add funds"
            name="addFunds"
            type="text"
            /* value={formState.ammount}
            onChange={handleChange} */
            >
          </input>
        </form>
        <button
          className="btn btn-block btn-info padding"
          style={{ cursor: 'pointer' }}
          type="submit"
        >
          Transfer funds
        </button>
      </div>
      <body className="padding">
        <div class="wrapper">
          <div class="total">
            <div class="total">Your total is: $<span id="total">0</span></div>
          </div>
          
          <div class="form">
            <input type="text" id="t-name" placeholder="Name of bet" />
            <input type="number" min="0" id="t-amount" placeholder="Transaction amount" />
            <button id="add-btn"><i class="fa fa-plus buttons"></i> Add Funds</button>
            <button id="sub-btn"><i class="fa fa-minus"></i> Subtract Funds</button>
            <p class="error"></p>
          </div>

          <div class="transactions">
            <table>
              <thead>
                <th>Transaction</th>
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

export default Wallet;