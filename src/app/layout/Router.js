import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Introduction from './../Introduction';
import Skills from './../Skills';
import About from './../About.js';
import Contact from './../ContactPage';
import Blog from './../Blog';
import Projects from './../Projects';
import SingleBlogPost from './../blog/SingleBlogPost';


const Router = () => {
	return (

	<Switch>
    	  <Route path="/" exact strict component={Introduction}/>
          <Route path="/about" exact strict component={About}/>
          <Route path="/skills" exact strict component={Skills}/>
          <Route path="/inbox" exact strict component={Contact}/>
          <Route path="/code" exact component={Projects}/>
          <Route path="/blog" exact component={Blog}/>
          <Route path="/blog/:slug" exact component={SingleBlogPost}/>
 	 </Switch>
)

} 
export default Router

/*<Route path="/skills" exact strict render={(props) => <SkillBars {...props} hue={"49"} saturation={"100"} skills={SKILLS}/>}/>*/
