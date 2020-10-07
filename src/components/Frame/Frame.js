import React from 'react';
import frame from './frame.svg';
import './Frame.css';


const Frame = (props) => {
	return(
		<div >
			<div >
				<object>
					<embed src={frame} width="100%" height="100%"></embed>
					
				</object>
			</div>
		</div>
	);
		
}

export default Frame;