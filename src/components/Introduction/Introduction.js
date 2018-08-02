import React from 'react';
import './Introduction.css';

const Introduction = () => {
	return(
		<div className='textZone w-80 absolute' id='homeBox'>
		 	<h1 className='f1'>{'Hi,'}</h1>
		 	<h1 className='f1'>{`I'm Omotola,`}</h1>
		 	<h1 className='f1'>{'Software Engineer.'}</h1>
		 	<h2 className='f5'>{'PHP/JAVASCRIPT/JAVA/HTML&CSS'}</h2>
		 	<a rel="contact" href="https://jacekjeznach.com/contact" className="pseudoBtn">{'CONTACT ME'}</a>
		</div>	
	);
		
}

export default Introduction;