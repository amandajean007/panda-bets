// import React, { useState, useEffect } from 'react';
// import '../App.css';


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // Set your secret key. Remember to switch to your live secret key in production.
// // See your keys here: https://dashboard.stripe.com/apikeys
// // function stripeCheckout() {
  
// //   fetch('https://buy.stripe.com/test_7sI4js5Pk5f534c288', { json: true }, (err, res, body) => {
// //     if (err) { return console.log(err); }
// //     console.log(body.url);
// //     console.log(body.explanation);
// //   });

// //   return
// // }
// // stripeCheckout();













// // var quantity = document.querySelectorAll('#quantity-input')

// // const paymentIntent = stripe.paymentIntents.create({
// //   amount: quantity,
// //   currency: 'usd',
// //   payment_method_types: ['card'],
// //   receipt_email: 'jenny.rosen@example.com',
// //   setup_future_usage: true,
// // });
// // console.log("payment intent: " + paymentIntent);

















// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // var repoList = document.querySelector('ul');
// // var fetchButton = document.getElementById('fetch-button');

// // function getApi() {
// //   // replace `octocat` with anyone else's GitHub username
// //   var requestUrl = 'https://api.github.com/users/octocat/repos';

// //   fetch(requestUrl)
// //     .then(function (response) {
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       for (var i = 0; i < data.length; i++) {
// //         var listItem = document.createElement('li');
// //         listItem.textContent = data[i].html_url;
// //         repoList.appendChild(listItem);
// //       }
// //     });
// // }

// // fetchButton.addEventListener('click', getApi);
// // ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // const formatPrice = ({ amount, currency, quantity }) => {
// // 	const numberFormat = new Intl.NumberFormat('en-US', {
// // 	  style: 'currency',
// // 	  currency,
// // 	  currencyDisplay: 'symbol',
// // 	});
// // 	const parts = numberFormat.formatToParts(amount);
// // 	let zeroDecimalCurrency = true;
// // 	for (let part of parts) {
// // 	  if (part.type === 'decimal') {
// // 		zeroDecimalCurrency = false;
// // 	  }
// // 	}
// // 	amount = zeroDecimalCurrency ? amount : amount / 100;
// // 	const total = (quantity * amount).toFixed(2);
// // 	return numberFormat.format(total);
// //   };

// const StripeCheckout = () => {

// 	const quantity = useState(0);
// 	const [amount, setAmount] = useState(0);
// 	const [currency, setCurrency] = useState('USD');

//   console.log('amount: ' + amount);
//   console.log('currency: ' + currency);

// 	useEffect(() => {
// 		async function fetchConfig() {
// 		  // Fetch config from our backend.
// 		  const {
// 			unitAmount,
// 			currency
// 		  } = await fetch('/config').then(r => r.json());
// 		  setAmount(unitAmount);
// 		  setCurrency(currency);
// 		}
// 		fetchConfig();
// 	  }, []);

// // if *stripe works* and buy x ammount of money
// // then add x to {funds}

// return (
//     <div className="sr-root">
//       <div className="sr-main">
//         <section className="container">
//           <div>
// 			      <h1 className="white padding">Available funds:{quantity}</h1>
//           </div>
//           <form action="/create-checkout-session/" method="POST" className="padding">
//             {/* <div className="quantity-setter padding">
//               <input
//                 type="text"
//                 id="quantity-input"
//                 name="quantity"
//                 placeholder="ie. 500"
//               />
//             </div> */}
//             <button
//               role="link"
//               id="submit"
//               type="submit"
//               className="btn btn-info padding"
//             >
//               Add to Virtual Wallet
//             </button><br/>
//             <button
//               role="link"
//               id="submit"
//               type="submit"
//               className="btn btn-info padding"
//             >
//               Cash Out
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default StripeCheckout;