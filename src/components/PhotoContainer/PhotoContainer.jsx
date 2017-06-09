// @flow

import React, {Component} from 'react';

import PhotoCaption from '../PhotoCaption/PhotoCaption';
import PhotoCutline from '../PhotoCutline/PhotoCutline';

class PhotoContainer extends Component {
	props: {
		children: any,
		caption: string,
		cutline: string
	};

	render(){

		return(
			<div className='PhotoContainer'>
				{this.props.children}
				<PhotoCaption text={this.props.caption}/>
				<PhotoCutline text={this.props.cutline}/>
			</div>
		)
	}
}

export default PhotoContainer;