// @flow

import React, {Component} from 'react';

import './SkinnyContainer.css';

class SkinnyContainer extends Component {
	props: {
		children: any,
	};

	render(){
		return(
			<div className='SkinnyContainer'>
				{this.props.children}
			</div>
		)
	}
}

export default SkinnyContainer;