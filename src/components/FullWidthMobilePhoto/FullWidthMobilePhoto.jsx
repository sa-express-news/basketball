// @flow

import React, {Component} from 'react';

import './FullWidthMobilePhoto.css';

class FullWidthMobilePhoto extends Component {
	props: {
		src: string,
		alt: string,
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
			<div className='FullWidthMobilePhotoContainer' style={containerStyle}>
				<img className='FullWidthMobilePhoto' src={this.props.src} width='100%' alt={this.props.alt}/>		
			</div>
		)
	}
}

export default FullWidthMobilePhoto;