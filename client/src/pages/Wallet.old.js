// import "../App.css"
// import { Link } from 'react-router-dom';
// // import Auth from '../utils/auth';
// // import { STRIPEAPI } from "./.. "
// // import stripe from './StripeCheckout';

// // function createSession() {
// //   // POST /v1/checkout/sessions
// //   const session = stripe.checkout.sessions.create({
// //     success_url: 'https://panda-bets.herokuapp.com/stripesuccess',
// //     cancel_url: 'https://panda-bets.herokuapp.com/stripecancel',
// //     payment_method_types: ['card'],
// //     line_items: [
// //       {
// //         price: 'price_xxxxxxxxxxxxx',
// //         quantity: 1
// //       },
// //     ],
// //     mode: 'payment',
// //   });
// //   console.log(session);
// // }
// // // ^^

// // createSession();

// // const session = await stripe.checkout.sessions.expire(
// //   'cs_test_a13hqd3798PMiVEmXdmd4tEmpnaO7JvLeix1gNmuCFoGnAl6A8iH7wVlmb'
// // );


// let funds = 0;

// // If checkout $, add to funds


// const Wallet = () => {

//   return (
//     <div>
//       <div className="white padding">
//         <form>
//           <h1 className="white padding">
//             Available funds: ${funds}<br/>
//           </h1>
//           <Link className="btn m-2" to="/stripecheckout">
//                 Add Funds -or- Cash Out
//           </Link>
//         </form>
//       </div>
     
//     </div>
//   )
// }

// export default Wallet;