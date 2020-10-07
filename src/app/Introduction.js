import React from 'react';
import './introduction/Introduction.css';


const Introduction = () => {
	return(
		<div className='intro-container'>
            <div className="intro-top" >
                <span className="top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
            </div>
            <div className ="intro-body">
                <div className="left-zone">
                    <div className="text-zone line-height">
                        <h1 className='font-size'>{'Hi,'}</h1>
                        <h1 className='font-size'>{`I'm Omotola,`}</h1>
                        <h1 className='font-size'>{'Software Engineer.'}</h1>
                        <h2 className='f5'>{'FULLSTACK DEVELOPER/ EDUCATOR/  TECH CREATIVE'}</h2>
                        <ul className="social-media">
                            <li className="social-icon"><a href="https://www.linkedin.com/in/omotolas/" target="_blank" rel="noopener noreferrer"><img alt="omotola" id="image" src={require('./../components/resources/icons8-linkedin-100.png')}/></a></li>

                            <li className="social-icon"><a href="https://www.instagram.com/mycodinghabits/" target="_blank" rel="noopener noreferrer"><img alt="omotola" id="image" src={require('./../components/resources/icons8-instagram-100.png')}/></a></li>

                            <li className="social-icon"><a href="https://twitter.com/mycodinghabits" target="_blank" rel="noopener noreferrer"><img alt="omotola" id="image" src={require('./../components/resources/icons8-twitter-100.png')}/></a></li>

                            <li className="social-icon"><a href="https://www.youtube.com/channel/UCk5v4orTT-ijc7QwDGP7e3w?view_as=subscriber" target="_blank" rel="noopener noreferrer"><img alt="omotola" id="image" src={require('./../components/resources/icons8-youtube-squared-100.png')}/></a></li>

                            <li className="social-icon"><a href="http://localhost:3000/inbox"><img alt="omotola" id="image" src={require('./../components/resources/icons8-important-mail-100.png')}/></a></li>
                        </ul>
                    </div>
                </div>
                <div className="right-zone">
                    <img alt="omotola" id="image" src={require('./../components/resources/omotolaImg.png')}/>
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

export default Introduction;