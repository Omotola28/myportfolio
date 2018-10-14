import React from 'react';
import {NavLink} from 'react-router-dom';
import Frame from './../components/frame/Frame';  
import Background from './layout/Background';

const About = () => {
	return(
		<div className='columns is-mobile'>
		   <Background/>
		   <div className='column is-half'>
			   	<div className='tl pa3 w-40 textZone leftZone' id='aboutBox'>
				    <h1 className='f1'>{'About Me'}</h1>
				    <p>
				    	I was meant to be a Medical Doctor! Back home in Nigeria at the time and with my 
				    	grades from high school that seemed like the definite career path, but then I finished high
				    	school and wrote a couple of exams but could not scale through into the Universities to study 
				    	Medicine. 
				    </p>
				    <p>
				    	In that period of waiting to be admitted for Medicine, thats where my interest for coding 
				    	and technology started. If you havent used w3schools as a reference to learning anything 
				    	your story should be very interesting. w3schools was my entry guide to HTML & CSS at the time
				    	after I learnt a few things then I applied to the United Kingdom for a course in Software Engineering
				    	because to me it seemed more practical than Computer Science and I wanted to get my hands dirty!
				    </p>

				    <p>
				    	This was a great learning opportunity for me because I moved into more programming with languages like&nbsp;
				    	<span className='b'>Java</span>,&nbsp;<span className='b'>Javascript</span>,&nbsp;<span className='b'>PHP</span> 
				    	&nbsp;and <span className='b'>Python</span>. The course enabled me get a better understanding of programming concepts 
				    	like polymorphism, abstraction, composition, inheritance, design patterns etc.
				    </p>
				    <p>
				    	Currently, I am undertaking a placement year at <a href='http://www.dai.co.uk/' rel='noreferrer' className='b links'>DAI international</a>, and my role involves writing script tables
				    	and functions for script tables to run automatic web testing for webscreens. This platform will serve as an outlet
				    	for personal <NavLink to="/code" exact className='b links'>projects</NavLink> I want to work on or currently working on. Furthermore, it would be a means for journalling thoughts 
				        and a great way to learn more technologies by writting about what I have learnt.
				    </p>
				</div>	
		   </div>
			<Frame img={require('./../components/resources/b&w.png')}/>
		</div>
	);
		
}

export default About;