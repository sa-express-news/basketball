// @flow

import React, {Component} from 'react';

import Paragraph from '../Paragraph/Paragraph';
import FullPhotoContainer from '../FullPhotoContainer/FullPhotoContainer';
import FullPhoto from '../FullPhoto/FullPhoto';


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
					const photo = object.value;
					const photoPath = this.loadPhoto(photo.source);

					switch (photo.type){
						case 'full':
							const photoComponent = <FullPhoto src={photoPath} alt={photo.caption}/>;
							return <FullPhotoContainer caption={photo.caption} cutline={photo.cutline} key={index} >{photoComponent}</FullPhotoContainer>

						default:
							return null
					};
				default:
					return null
			};
		});

		return(
			<div className='Section'>
				{components}
			</div>
		)
	}
}

export default Section;