import React from 'react';
import frame from './frame.svg';
import './Frame.css';


const Frame = (props) => {
	return(
		<div className="column">
			<div className="frame-Pos">
				<object>
					<embed src={frame} width="100%" height="100%"></embed>
					<img alt="omotola" id="image" src={props.img}/>
				</object>
			</div>
		</div>
	);
		
}

export default Frame;