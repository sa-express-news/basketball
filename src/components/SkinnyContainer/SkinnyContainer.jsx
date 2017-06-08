// @flow

import React, {Component} from 'react';

class SkinnyContainer extends Component {
	props: {
		width: number
	};

	render(){
		const style = {
			width: `${this.props.width}%`
		};

		return(
			<div className='SkinnyContainer' style={style} />
		)
	}
}

export default SkinnyContainer;