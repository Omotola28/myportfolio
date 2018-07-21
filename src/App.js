import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Introduction from './components/Introduction/Introduction';
import Background from './components/Background/Background';
import SkillBars from './components/SkillsBars/SkillsBars';
import Skills from './components/Skills/Skills';
import Frame from './components/Frame/Frame';
import About from './components/About/About';
import Route from 'react-router-dom/Route';

import './App.css';

const SKILLS = [
  {type: "HTML", level: 99},
  {type: "CSS", level: 98},
  {type: "JavaScript", level: 87},
  {type: "jQuery", level: 92},
  {type: "BootStrap", level: 90},
  {type: "Photoshop", level: 100},
  {type: "Angular.js", level: 16},
  {type: "React.js", level: 25},
  {type: "PHP", level: 36},
  {type: "Ruby", level: 11}
];

class App extends Component {

  render() {
    return (
        <div className="App">
          <Background/>
          <Navigation/>
          <Route path="/" exact strict component={Introduction}/>
          <Route path="/" exact strict render={(props) => <Frame {...props} img={require('./components/omotolaImg.png')}/>}/>
          <Route path="/about" exact strict component={About}/>
          <Route path="/about" exact strict render={(props) => <Frame {...props} img={require('./components/b&w.png')}/>}/>
          <Route path="/skills" exact strict component={Skills}/>
          <Route path="/skills" exact strict render={(props) => <SkillBars {...props} hue={"300"} saturation={"40"} skills={SKILLS}/>}/>
          
        </div>
    );
  }
}

export default App;
