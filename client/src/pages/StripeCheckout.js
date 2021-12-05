import React, { useState } from 'react';
import '../App.css';

const StripeCheckout = () => {
	return (
		<div>
			<section>
				<div class="product">
					Money to Buy for account
				</div>
				<form action="/create-checkout-session" method="POST">
					<button type="submit" id="checkout-button">Checkout</button>
				</form>
			</section>
		</div>
		
	);
};
export default StripeCheckout;