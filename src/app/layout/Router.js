import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Introduction from './../Introduction';
import Skills from './../Skills';
import About from './../About.js';
import Contact from './../ContactPage';
import Projects from './../Projects';
import Redirect from './../blog/Redirect';


const Router = () => {
	return (

	<Switch>
    	  <Route path="/" exact strict component={Introduction}/>
          <Route path="/about" exact strict component={About}/>
          <Route path="/skills" exact strict component={Skills}/>
          <Route path="/inbox" exact strict component={Contact}/>
          <Route path="/code" exact component={Projects}/>
          <Route path="/blog" component={() => {window.location.href = "https://blog.oshogunle.com/"; return null}}/>
 	 </Switch>
)

} 
export default Router

