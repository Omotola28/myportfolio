import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Introduction from './components/Introduction/Introduction';
import Background from './components/Background/Background';
import SkillBars from './components/SkillsBars/SkillsBars';
import Skills from './components/Skills/Skills';
import Frame from './components/Frame/Frame';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import Route from 'react-router-dom/Route';

import './App.css';

const SKILLS = [
  {type: "Communication", level: 60},
  {type: "HTML", level: 50},
  {type: "CSS", level: 52},
  {type: "JavaScript", level: 42},
  {type: "Java", level: 35},
  {type: "Python", level: 36.3},
  {type: "React.js", level: 25}
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
          <Route path="/skills" exact strict render={(props) => <SkillBars {...props} hue={"49"} saturation={"100"} skills={SKILLS}/>}/>
          <Route path="/inbox" exact strict component={Contact}/>
          <Route path="/inbox" exact strict component={Location}/>
          
        </div>
    );
  }
}

export default App;
