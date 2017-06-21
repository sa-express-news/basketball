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
          <IntroParagraph text='Towering above his high school defenders, 6-foot-10 center Charles Bassey took the ball on the right wing of the basket, dribbled, then flung it to the backboard in the playful style of a Harlem Globetrotter.' />
          <Sections sections={Story.sections}/>
          <Video src='https://s3.amazonaws.com/projects.expressnews.com/basketball/st-anthony.mp4' autoPlay={false} muted={true} loop={false}/>
          </div>
      </div>
    );
  }
}

export default App;

//<iframe src="https://docs.google.com/presentation/d/19T3P1_uW-Nt149AJnYzMyZ177_z5wtTMDYAnZ570Hqc/embed?start=false&loop=true&delayms=3000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>