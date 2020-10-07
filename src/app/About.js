import React from 'react';
import {Link} from 'react-router-dom';
import './about/About.css';

const About = () => {
	return(
		<div className='about-container'>
            <div className="intro-top" >
                <span className="top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
            </div>
            <div className ="about-body">
                <div className="left-zone about-me">
                    <div className="text-zone">
                        <h1 className='font-size about-h1'>{'About Me'}</h1>
                        <div className="about-paragraph">
                            <p>
                            My grades after high school seemed to choose Medicine as a career path for me, but after high school, my interest in blogging started my journey into tech. Exploring the pages of my wordpress blog trying to customise it to my satisfaction gave birth to a genuine passion for web and programming technologies. I started with <a href='https://www.w3schools.com/' rel='noreferrer' className='b links'>W3schools </a> learning the basic HTML, CSS and some Javascript. 
                            </p>
                            <p>I then applied to the United Kingdom for a course in Software Engineering, after 5 long years of Dedication and hardwork I graduated with a 1st in Software Engineering with Professional Experience.
                            </p>
                            <p>
                                Currently, A Graduate Developer at <a href='https://ampersandcommerce.com/' rel='noreferrer' className='links'>Ampersand Uk</a>. This platform will serve as an outlet for <Link to="/code" exact className='links'>personal projects</Link> and for hosting my <a href="https://blog.oshogunle.com/" rel="noopener noreferrer" className="links">technical blog.</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="right-zone">
                    <img alt="omotola" id="image" src={require('./../components/resources/b&w.png')}/>
                </div>
            </div>
            <div className="intro-bottom" >
                <span className="bottom-tags">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
                    <br/>
                    &nbsp;&nbsp;&nbsp;&lt;/html&gt;
                </span>
                
            </div>
		</div>	
	);
		
}

export default About;
