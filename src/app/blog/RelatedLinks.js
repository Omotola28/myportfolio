import React from 'react'
import SingleBlogPost from './SingleBlogPost'
import { Link } from "react-router-dom";

const linkClicks = (data) =>{
  <SingleBlogPost test={data}/>
  //{ console.log(data)}


}

const createLinks = (obj,data) => {
	if( obj !== undefined)
	{
		return Object.entries(obj).map(([key, value]) => 
      key.includes("/blog/")
      ? <li className="is-link" key={key}><Link to={key}>{value}</Link></li>
      : <li className="is-link" key={key}><a href={key}>{value}<i className="material-icons externalLinks">arrow_right_alt</i></a></li>
    )
	}
	else 
		return (<li>No related links</li>)
}
class RelatedLinks extends React.Component {
	render()
	{
	return(
		<div className="column">
			<ul className="menu-list ma5">
			   <li>
			     <a className="has-background-warning is-size-3">Related Links</a>
			     <ul>
			      {createLinks(this.props.links, this.props)}
			     </ul>
			   </li>
			 </ul>
		</div>
   )
 }
}
export default RelatedLinks