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
                My grades after high school seemed to choose Medicine as a career path for me, but after high school I got interested in blogging and from blogging trying to tweak
                the appearance of my blog then. This exploring gave birth to a genuine passion for web and technologies to manipulate it. My interest in coding was then inspired 
                by the flexibility of the industry. I started with W3schools learning the basic HTLM, CSS and some Javascript. I later applied to the United Kingdom for a course in 
                Software Engineering because the course outline was practical and I wanted to get my hands dirty!
				    </p>
            <br/>
				    <p>
				    	This was a great learning opportunity for me because I moved into more programming with languages like&nbsp;
				    	<span className='b'>Java</span>,&nbsp;<span className='b'>Javascript</span>,&nbsp; and <span className='b'>PHP</span>. 
              The course enabled me get a better understanding of programming concepts 
				    	like polymorphism, abstraction, composition, inheritance, design patterns etc.
				    </p>
            <br/>
				    <p>
              I am currently undertaking a placement year at <a href='http://www.dai.co.uk/' rel='noreferrer' className='b links'>DAI</a>,
              and my role involves the development of warehouse operations manual screens, 
              testing using automated testing frameworks and customer service support. This platform will serve as an outlet for personal <NavLink to="/code" exact className='b links'>projects</NavLink>                 
               I want to work on or currently working on. Furthermore, it would be a means for journaling thoughts and a great way to learn more technologies by writing about what I have learnt.
				    </p>
				</div>	
		   </div>
			<Frame img={require('./../components/resources/b&w.png')}/>
		</div>
	);
		
}

export default About;
