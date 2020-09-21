import React from 'react';
import USCurrencyFormat from '../utils/USCurrencyFormat';

export default function CartTotal (props) {
	const total = Object.keys(props.selected).reduce(
		(acc, curr) => acc + props.selected[curr].cost,
		0
	  );

	return (
		<div className="summary__total__value">
			{USCurrencyFormat.format(total)}
		</div>
	)
	
}