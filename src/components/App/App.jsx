// @flow

import React, { Component } from 'react';

// import Photo from '../Photo/Photo';
import FullWidthPhoto from '../FullWidthPhoto/FullWidthPhoto';
import PhotoCaption from '../PhotoCaption/PhotoCaption';
import PhotoCutline from '../PhotoCutline/PhotoCutline';
import IntroParagraph from '../IntroParagraph/IntroParagraph';
import SkinnyContainer from '../SkinnyContainer/SkinnyContainer';
import Sections from '../Sections/Sections';
import StoryMeta from '../StoryMeta/StoryMeta';

// $FlowFixMe
import StockPhoto from '../Photo/stock.jpeg';

import Story from '../../story.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <SkinnyContainer width={90}>
        <FullWidthPhoto src={StockPhoto} alt='Stock Photo'/>
          <PhotoCaption text='Supporters of Emmanuel Macron distributed pamphlets in La Courneuve in April' />
          <PhotoCutline text='Alex Majoli / Magnum, for The New York Times' />
          <StoryMeta meta={Story.meta}/>
          <hr/>
          <IntroParagraph text='On Feb. 2, around a quarter to 5 in the afternoon, just as the day began to darken, police officers approached four young men outside a recording studio in the Rose des Vents, an agglomeration of chalky cites, , or public-housing projects, that covers a remote expanse of the northeast Paris suburb Aulnay-sous-Bois. The police asked to see one man’s identity papers. Within minutes, another was on his stomach. The officers put handcuffs on the 21-year-old, whose family, of Congolese origin, lived nearby. When they arrived at the station, staff members noticed that he was in a lot of pain. He was rushed to a hospital, where an examination revealed a 10-centimeter tear in his rectum. It had been caused by a police baton.' />
          <Sections sections={Story.sections}/>
        </SkinnyContainer> 
      </div>
    );
  }
}

export default App;
