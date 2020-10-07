import React, { Component } from 'react';
import './Skills.css';

class SkillBars extends Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };       
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ collapsed: false })
    }, 1000);
  }

  render() {
    const { collapsed } = this.state;
    const { hue, saturation, skills } = this.props;

    return(  
        <div className={`${collapsed ? 'collapsed' : ''}`}>
          <h1 className='skill-h1 skill-bar-fontSize'>{'Skill Bar Level'}</h1>
          <ul className="skill-bars">
            {skills.map((skill, index) => 
              <li
                key={skill.type}
                style={{ width: `${skill.level}%`, backgroundColor: `hsl(${hue}, ${saturation}%, ${130 / (index + 3.5) }%)` }}
              >
                <p id="skillBarMobile">{skill.type}<span>{skill.level}</span></p>
              </li>
            )}
          </ul>
        </div>
    );
  }
}

export default SkillBars;

