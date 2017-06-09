// @flow

import React, {Component} from 'react';

import LeadPhoto from '../LeadPhoto/LeadPhoto';
import PhotoCaption from '../PhotoCaption/PhotoCaption';
import PhotoCutline from '../PhotoCutline/PhotoCutline';

class LeadPhotoContainer extends Component {
	props: {
		data: Object
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	render(){
		const photoPath = this.loadPhoto(this.props.data.source);
		return(
			<div className='LeadPhotoContainer'>
				<LeadPhoto src={photoPath} alt={this.props.data.caption} />
				<PhotoCaption text={this.props.data.caption}/>
				<PhotoCutline text={this.props.data.cutline}/>
			</div>
		)
	}
}

export default LeadPhotoContainer;