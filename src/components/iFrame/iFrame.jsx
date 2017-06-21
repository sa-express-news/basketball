// @flow

import React, {Component} from 'react';

class iFrame extends Component {
	props: {
		src: string,
		height: number,
		width: number
	};

	static defaultProps =  { 
		height: 100,
		width: 100
	};

	render(){
		const containerStyle = {
			height: `${this.props.height}%`,
			width: `${this.props.width}%`
		};

		return(
			<div className='iFrameContainer' style={containerStyle}>
				<iframe src={this.props.src} frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"/>		
			</div>
		)
	}
}

export default iFrame;