// @flow

import React, {Component} from 'react';

import Paragraph from '../Paragraph/Paragraph';
import FullWidthMobilePhoto from '../FullWidthMobilePhoto/FullWidthMobilePhoto';
import PhotoCaption from '../PhotoCaption/PhotoCaption';
import PhotoCutline from '../PhotoCutline/PhotoCutline';


class Section extends Component {
	props: {
		data: any
	};

	loadPhoto = (path: string) =>{
		return require(`../../images/${path}`);
	}

	render(){
		const data = this.props.data;
		const components = data.map((object, index) =>{
			switch (object.type){
				case 'text':
					return <Paragraph text={object.value} key={index} />
				case 'photo':
					const photoPath = this.loadPhoto(object.value);
					return <FullWidthMobilePhoto src={photoPath} alt='' key={index}/>
				case 'caption':
					return <PhotoCaption text={object.value} key={index} />
				case 'cutline':
					return <PhotoCutline text={object.value} key={index} />
				default:
					return null
			}
		});

		return(
			<div className='section'>
				{components}
			</div>
		)
	}
}

export default Section;