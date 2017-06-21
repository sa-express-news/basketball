// @flow

import React, {Component} from 'react';

import './ResponsiveiFrame.css';

class ResponsiveiFrame extends Component {
	props: {
		src: string,
	};

	render(){
		return(
			<div className='iFrameContainer'>
				<iframe src={this.props.src} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"/>		
			</div>
		)
	}
}

export default ResponsiveiFrame;