import React from 'react';
import Frame from './../components/frame/Frame';  //shared
import Background from './layout/Background';

const Introduction = () => {
	return(
		<div className='columns'>
		   <Background/>
		   <div className="column is-half">
		       <div className="tl pa3 textZone lineH leftZone">
		       	<h1 className='fontS'>{'Hi,'}</h1>
			 	<h1 className='fontS'>{`I'm Omotola,`}</h1>
			 	<h1 className='fontS'>{'Software Engineer.'}</h1>
			 	<h2 className='f5'>{'PHP/JAVASCRIPT/JAVA/HTML&CSS'}</h2>
			 	<a rel="contact" href="https://jacekjeznach.com/contact" className="pseudoBtn">{'CONTACT ME'}</a>
		       </div>
		   </div>
		 	
		 	<Frame img={require('./../components/resources/omotolaImg.png')}/>
		</div>	
	);
		
}

export default Introduction;