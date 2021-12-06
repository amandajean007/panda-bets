import "../App.css"
import { Link } from 'react-router-dom';
// import Auth from '../utils/auth';
// import { STRIPEAPI } from "./.. "
// import Stripe from './str'

// POST /v1/checkout/sessions
const session = stripe.checkout.sessions.create({
  success_url: 'https://example.com/success',
  cancel_url: 'https://example.com/cancel',
  line_items: [
    {
      price: 'H5ggYwtDq4fbrJ',
      quantity: 2
    },
  ],
  mode: 'payment',
});
// ^^

// const session = await stripe.checkout.sessions.expire(
//   'cs_test_a13hqd3798PMiVEmXdmd4tEmpnaO7JvLeix1gNmuCFoGnAl6A8iH7wVlmb'
// );


let funds = 0;


const Wallet = () => {

  return (
    <div>
      <div className="white padding">
        <form>
          <section>
            Available funds: {funds}<br/>
          </section>
        {/* <form onSubmit={}> */}
          {/* <button
            className="btn btn-block btn-info padding add-btn"
            style={{ cursor: 'pointer' }}
            type="submit"
          >
            Add funds
          </button> */}
          <Link className="btn m-2" to="/stripecheckout">
                Add or Transfer Funds
          </Link>
        </form>
      </div>
     
    </div>
  )
}

export default Wallet;