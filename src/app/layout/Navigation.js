import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Introduction from './../Introduction';
import Skills from './../Skills';
import About from './../About.js';
import Contact from './../ContactPage';
import Projects from './../Projects';


const Navigation = () => {
	return(
		<Router>
			<Switch>
				<div>
					<div className='nav-bar'>
						<nav>
							<Link to="/" exact id="home" rel="index" activeClassName="active"><i className="material-icons md-30"></i></Link>
							<Link to="/about" exact id="about" rel="about" activeClassName="active"><i className="material-icons md-30"></i></Link>
							<Link to="/skills" exact id="skills" rel="skills" activeClassName="active"><i className="material-icons md-30"></i></Link>
							<Link to="/code" exact id="code" rel="code" activeClassName="active"><i className="material-icons md-30"></i></Link>
							<Link to="/inbox" exact id="inbox" rel="inbox" activeClassName="active"><i className="material-icons md-30"></i></Link>
							<Link to="/blog" exact id="blog" rel="blog" activeClassName="active"><i className="material-icons md-30"></i></Link>
						</nav>
					</div>
					
					<Route path="/" exact strict component={Introduction}/>
          			<Route path="/about" exact strict component={About}/>
          			<Route path="/skills" exact strict component={Skills}/>
          			<Route path="/code" exact component={Projects}/>
					<Route path="/inbox" exact strict component={Contact}/>
					<Route path="/blog" component={() => {window.location.href = "https://blog.oshogunle.com/"; return null;}}/>
					
				</div>	
			</Switch>
		</Router>
		
	);
		
}

export default Navigation;

