import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Helmet from 'react-helmet'
import Introduction from './components/Introduction/Introduction';
import Background from './components/Background/Background';
import SkillBars from './components/SkillsBars/SkillsBars';
import Skills from './components/Skills/Skills';
import Frame from './components/Frame/Frame';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import Blog from './components/Blog/Blog';
import BlogPost from './components/app/blog/BlogPost';
import BlogItem from './components/Blog/BlogItem';
import SingleBlogPost from './components/Blog/SingleBlogPost';
import {Route, IndexRoute} from 'react-router-dom';
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
          <Helmet //You could make this alot pretty by creating a component for it.
            title="Omotola Shogunle portfolio"
            meta={[
              { charset: 'utf-8' },
              { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
              { name: 'theme-color', content: 'yellow, gray and black' },
              { name: 'Omotola Shogunle', content: 'Omotola Shogunle\'s personal wedsite, portfolio, blog, tutorials on all things programming languages,concepts'},
              { name: 'languages', content: 'html, css, python, JavaScript, react' },
            ]}
            script={[
              { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
            ]}
            link={[
              {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
              {'rel':'manifest', 'href': '%PUBLIC_URL%/manifest.json'},
              {'rel':'stylesheet', 'href': 'https://fonts.googleapis.com/icon?family=Material+Icons'},
              {'rel':'stylesheet', 'href': 'https://fonts.googleapis.com/css?family=La+Belle+Aurore'}
            ]}
          />
          <Background/>
          <Navigation/>
          <Route path="/" exact strict component={Introduction}/>
          <Route path="/" exact strict render={(props) => <Frame {...props} img={require('./components/omotolaImg.png')}/>}/>
          <Route path="/about" exact strict component={About}/>
          <Route path="/about" exact strict render={(props) => <Frame {...props} img={require('./components/b&w.png')}/>}/>
          <Route path="/skills" exact strict component={Skills}/>
          <Route path="/skills" exact strict render={(props) => <SkillBars {...props} hue={"49"} saturation={"100"} skills={SKILLS}/>}/>
          <Route path="/inbox" exact strict component={Contact}/>
          <Route path="/inbox" exact strict render={(props) => <Location {...props} initialPosition={{lat: 53.487523,lng: -2.290126}} />}/>
          <Route path="/blog" exact component={Blog}>
            <IndexRoute component={BlogItem} />
            <Route path='posts/:slug' component={SingleBlogPost}/>
          </Route>
          
        </div>
    );
  }
}

export default App;
