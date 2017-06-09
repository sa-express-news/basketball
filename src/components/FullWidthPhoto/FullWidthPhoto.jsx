// @flow

import React, {Component} from 'react';

import './FullWidthPhoto.css';

class FullWidthPhoto extends Component {
	props: {
		src: string,
		alt: string,
	};

	render(){
		return(
				<img className='FullWidthPhoto' src={this.props.src} width='100%' alt={this.props.alt}/>		
		)
	}
}

export default FullWidthPhoto;