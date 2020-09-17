import React from 'react';
import PartsList from './PartsList';
import Cart from './Cart';

export default function CustomizationMenu(props) {
	return(
		<main>
				<PartsList features={props.features} selected={props.selected} updateFeature={props.updateFeature}/>
        	<Cart selected={props.selected} />
		</main>

	)
}