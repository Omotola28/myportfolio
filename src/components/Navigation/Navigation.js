import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

const Navigation = ({onRouteChange}) => {
	return(
		<div className='navBar'>
		    <a className="logo" rel="index" href="">omotola</a>
			<nav>
				<NavLink to="/" exact id="home" rel="index" activeClassName="active"><i className="material-icons md-30"></i></NavLink>
				<NavLink to="/about" exact id="about" rel="about" activeClassName="active"><i className="material-icons md-30"></i></NavLink>
				<NavLink to="/skills" exact id="skills" rel="skills" activeClassName="active"><i className="material-icons md-30"></i></NavLink>
				<NavLink to="/code" exact id="code" rel="code" activeClassName="active"><i className="material-icons md-30"></i></NavLink>
				<NavLink to="/inbox" exact id="inbox" rel="inbox" activeClassName="active"><i className="material-icons md-30"></i></NavLink>
				<NavLink to="/blog" exact id="blog" rel="blog" activeClassName="active"><i className="material-icons md-30"></i></NavLink>
			</nav>
		</div>	
	);
		
}

export default Navigation;

