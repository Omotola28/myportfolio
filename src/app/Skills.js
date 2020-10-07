import React from 'react';
import SkillBars from './skills/SkillBars';
import './skills/Skills.css';


const SKILLS = [
  {type: "Communication", level: 70},
  {type: "HTML", level: 95},
  {type: "CSS", level: 95},
  {type: "JavaScript", level: 90},
  {type: "Flutter", level: 70},
  {type: "React.js", level: 80},
  {type: "Node.js", level: 70}
];

const Skills = () => {
	return(
		<div className='skills-container'>
            <div className="intro-top" >
                <span className="top-tags"> &nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
            </div>
            <div className ="skills-body">
                <div className="left-zone skills mb-left-zone">
                      <h1 className='font-size skill-h1'>{'Skills & Experience'}</h1>
                      <p>
                        Languages I have experiencing writing include HTML&CSS, Java, Javascript,
                        PHP, and Frameworks like NodeJs, ReactJs, and Flutter. I am also proficient with other 
                        technologies like Git & GitHub, and Firebase.
                      </p>
                      <p>
                       This portfolio was built with ReactJs and NodeJs
                      </p>
                      <p>
                        If you would like to view the source code for some of the projects I have worked on you can visit my&nbsp; 
                        <a href='https://github.com/Omotola28' rel='noreferrer' className='links'>GitHub</a> page. For professional connections here is my <a href='https://www.linkedin.com/in/omotolas/' rel='noreferrer' className='links'>LinkedIn</a> page. 
                    </p>
                    <p>
                      However, if you want to view some of my technical writing you can check out my Blog on <a href='https://blog.oshogunle.com/' rel='noreferrer' className='links'>Hashnode</a>
                    </p>
                    <div className="lift-up-div"></div>
                </div>
                <div className="right-zone bars mb-right-zone">
                  <SkillBars hue={"49"} saturation={"100"} skills={SKILLS}/>
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

export default Skills;