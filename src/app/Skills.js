import React from 'react';
import SkillBars from './skills/SkillsBars';
import Background from './layout/Background';

const SKILLS = [
  {type: "Communication", level: 60},
  {type: "HTML", level: 80},
  {type: "CSS", level: 80},
  {type: "JavaScript", level: 70},
  {type: "Java", level: 60},
  {type: "PHP", level: 65},
  {type: "React.js", level: 68}
];

const Skills = () => {
	return(
		<div className="columns is-full-mobile">
			<Background/>
			<div className="column is-half">
				<div className='tl pa3 textZone w-40 leftZone' id='skillsBox'>
				    <h1 className='f1'>{'Skills & Experience'}</h1>
				    <p>
					    Languages I have experience writing HTML&CSS, Java, Javascript,
					    PHP and some frameworks like Bootstrap, tachyons etc. Most of which were derived
					    from projects at university. I am proficient with Git, Vim and I have some fundamental
					    knowledge in languages like Python and C++ but I have not implemented any solutions using 
					    these languages, although I plan on doing so.
				    </p>
				    <p>
					    I am currently exploring the use of ReactJs and NodeJs. This portfolio was built using
					    react!
				    </p>
				    <p>
					    If you would like to view the source code for some of the projects I have worked on you can visit my&nbsp; 
					    <a href='https://github.com/Omotola28' rel='noreferrer' className='b links'>GitHub</a> page. For professional connections 
					    here is my <a href='https://www.linkedin.com/in/omotolas/' rel='noreferrer' className='b links'>LinkedIn</a> page
					</p>
			    </div>	
			</div>
			<SkillBars hue={"49"} saturation={"100"} skills={SKILLS}/>
		</div>
	);
		
}

export default Skills;
