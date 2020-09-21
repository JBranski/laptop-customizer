import React from 'react';
import USCurrencyFormat from '../utils/USCurrencyFormat';
import CartTotal from './CartTotal';

export default function Cart (props) {
	const summary = Object.keys(props.selected).map((feature, idx) => {
		const featureHash = feature + '-' + idx;
		const selectedOption = props.selected[feature];
  
		return (
		  <div className="summary__option" key={featureHash}>
			<div className="summary__option__label">{feature} </div>
			<div className="summary__option__value">{selectedOption.name}</div>
			<div className="summary__option__cost">
			  {USCurrencyFormat.format(selectedOption.cost)}
			</div>
		  </div>
		);
	  });

	return (
		<section className="main__summary">
			<h2>Your cart</h2>
			{summary}
			<div className="summary__total">
				<div className="summary__total__label">Total</div>
				<CartTotal selected={props.selected} />
			</div>
		</section>
	)
}