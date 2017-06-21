// @flow

import React, { Component } from 'react';

import StoryTopContainer from '../StoryTopContainer/StoryTopContainer';
import IntroParagraph from '../IntroParagraph/IntroParagraph';
import Sections from '../Sections/Sections';
import Video from '../Video/Video';

import Story from '../../story.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
          <StoryTopContainer data={Story.top} />
          <div className='Story'>
          <IntroParagraph text='On Feb. 2, around a quarter to 5 in the afternoon, just as the day began to darken, police officers approached four young men outside a recording studio in the Rose des Vents, an agglomeration of chalky cites, , or public-housing projects, that covers a remote expanse of the northeast Paris suburb Aulnay-sous-Bois. The police asked to see one man’s identity papers. Within minutes, another was on his stomach. The officers put handcuffs on the 21-year-old, whose family, of Congolese origin, lived nearby. When they arrived at the station, staff members noticed that he was in a lot of pain. He was rushed to a hospital, where an examination revealed a 10-centimeter tear in his rectum. It had been caused by a police baton.' />
          <Sections sections={Story.sections}/>
          <Video src='https://s3.amazonaws.com/projects.expressnews.com/basketball/st-anthony.mov' autoPlay={false} muted={true} loop={false}/>
          </div>
      </div>
    );
  }
}

export default App;

//<iframe src="https://docs.google.com/presentation/d/19T3P1_uW-Nt149AJnYzMyZ177_z5wtTMDYAnZ570Hqc/embed?start=false&loop=true&delayms=3000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>