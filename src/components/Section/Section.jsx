// @flow

import React, {Component} from 'react';

import Paragraph from '../Paragraph/Paragraph';
import PhotoContainer from '../PhotoContainer/PhotoContainer';
import FullWidthMobilePhoto from '../FullWidthMobilePhoto/FullWidthMobilePhoto';


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
					const photoPath = this.loadPhoto(object.value.source);
					const photo = <FullWidthMobilePhoto src={photoPath} alt='' />
					return <PhotoContainer caption={object.value.caption} cutline={object.value.cutline} key={index}>
						{photo}
					</PhotoContainer>
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