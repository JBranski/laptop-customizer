import React, { Component } from 'react';

import './App.css';
import CustomizationMenu from './components/CustomizationMenu';
import TitleBanner from './components/TitleBanner';
import Features from './utils/Features';

class App extends Component {

	state = {
		selected: {
			Processor: {
			  name: '17th Generation Intel Core HB (7 Core with donut spare)',
			  cost: 700
			},
			'Operating System': {
			  name: 'Ubuntu Linux 16.04',
			  cost: 200
			},
			'Video Card': {
			  name: 'Toyota Corolla 1.5v',
			  cost: 1150.98
			},
			Display: {
			  name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
			  cost: 1500
			}
		},
	}

	updateFeature = (feature, newValue) => {
		const selected = Object.assign({}, this.state.selected);
		selected[feature] = newValue;
		this.setState({
		  selected
		});
	};


  render() {
    

    return (
      <div className="App">
		<TitleBanner></TitleBanner>
        <CustomizationMenu features = { Features } selected={this.state.selected} updateFeature={this.updateFeature}></CustomizationMenu>
      </div>
    );
  }
}

export default App;
