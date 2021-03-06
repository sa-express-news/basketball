// @flow

import React, {Component} from 'react';

class Video extends Component {
	props: {
		src: string,
		autoPlay: boolean,
		muted: boolean,
		loop: boolean,
		controls: boolean,
		height: number,
		width: number
	};

	static defaultProps =  { 
		height: 100,
		width: 100,
		controls: true
	};

	render(){
		const containerStyle = {
			height: `${this.props.height}%`,
			width: `${this.props.width}%`
		};

		return(
			<div className='videoContainer' style={containerStyle}>
				<video src={this.props.src} autoPlay={this.props.autoPlay} muted={this.props.muted} loop={this.props.loop} preload='auto' width='100%' controls={this.props.controls}></video>		
			</div>
		)
	}
}

export default Video;