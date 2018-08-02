import React from 'react';
import frame from './frame.svg';
//import omotolaImg from './omotolaImg.png';
import './Frame.css';


const Frame = (props) => {
	return(
		<div id='frame'>
			
			<object>
				<embed src={frame} width="40%" height="40%"></embed>
				<img alt="omotola" id="image" src={props.img}/>
			</object>
		</div>
	);
		
}

export default Frame;