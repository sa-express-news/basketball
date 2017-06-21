// @flow

import React from 'react';

import Paragraph from '../Paragraph/Paragraph';
import SectionHeading from '../SectionHeading/SectionHeading';
import FullPhoto from '../FullPhoto/FullPhoto';
import FullPhotoContainer from '../FullPhotoContainer/FullPhotoContainer';
import SmallPhotoDesktop from '../SmallPhotoDesktop/SmallPhotoDesktop';
import SmallPhotoDesktopContainer from '../SmallPhotoDesktopContainer/SmallPhotoDesktopContainer';
import SmallPhotoDesktopContainerReverse from '../SmallPhotoDesktopContainerReverse/SmallPhotoDesktopContainerReverse';
import PullQuote from '../PullQuote/PullQuote';
import RelatedContent from '../RelatedContent/RelatedContent';
import ResponsiveiFrame from '../ResponsiveiFrame/ResponsiveiFrame';

export default{
	text: (object: Object, key: number) => <Paragraph text={object.value} key={key}/>,

	subhead: (object: Object, key: number) => <SectionHeading text={object.value} key={key}/>,

	photo: function(object: Object, key: number){
		const photo = object.value;
		const photoPath = this.loadPhoto(photo.source);
		switch (photo.type){
			
			case 'full': 
			let photoComponent = <FullPhoto src={photoPath} alt={photo.caption}/>;
			return <FullPhotoContainer caption={photo.caption} cutline={photo.cutline} key={key}>{photoComponent}</FullPhotoContainer>
			
			case 'small-left':
			let smallPhotoComponent = <SmallPhotoDesktop src={photoPath} alt={photo.caption}/>
			return <SmallPhotoDesktopContainer caption={photo.caption} cutline={photo.cutline} key={key}>{smallPhotoComponent}</SmallPhotoDesktopContainer>
			
			case 'small-right':
			let smallPhotoComponentReverse = <SmallPhotoDesktop src={photoPath} alt={photo.caption}/>
			return <SmallPhotoDesktopContainerReverse caption={photo.caption} cutline={photo.cutline} key={key}>{smallPhotoComponentReverse}</SmallPhotoDesktopContainerReverse>

			default:
			return null
		};
	},

	loadPhoto: function(path: string){
		return require(`../../images/${path}`);
	},

	pullquote: (object: Object, key: number) => <PullQuote quote={object.value.quote} key={key} />,

	related: (object: Object, key: number) => <RelatedContent headline={object.value.headline} link={object.value.link} key={key} />,

	iframe: (object: Object, key: number) => <ResponsiveiFrame src={object.value.source} key={key}/>,

	renderComponent: function(object: Object, key: number){
		return object.type && this[object.type] ? this[object.type](object, key) : null;
	}
};