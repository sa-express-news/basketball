// @flow

import React, {Component} from 'react';

import './FullWidthMobilePhoto.css';

class FullWidthMobilePhoto extends Component {
	props: {
		src: string,
		alt: string,
	};

	render(){
		return(
			<div className='FullWidthMobilePhotoContainer'>
				<img className='FullWidthMobilePhoto' src={this.props.src} width='100%' alt={this.props.alt}/>		
			</div>
		)
	}
}

export default FullWidthMobilePhoto;