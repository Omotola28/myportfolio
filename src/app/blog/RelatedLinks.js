import React from 'react'

const createLinks = (obj) => {
	if( obj !== undefined)
	{
		return Object.entries(obj).map(([key, value]) => 
			    <li className="is-link" key={key}><a href={key}>{value}<i className="material-icons externalLinks">arrow_right_alt</i></a></li>)
	}
	else {
		return (<li>No related links</li>)
	}
	
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
			      {createLinks(this.props.links)}
			     </ul>
			   </li>
			 </ul>
		</div>

		
   )
 }
}
export default RelatedLinks

