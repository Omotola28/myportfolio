import React from 'react'
import PageContent from './../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'


const SingleBlogPost =({location: {state:{ props }}}) => {
	return(

		<div className="columns">
			<PageContent style={{height: '680px', margin: '0 16em'}} className="scrollBar column is-three-fifths">
				<BlogNav to="/blog" date={props.date}/>
				<BlogContent {...props}/>
			</PageContent> 
		</div>

		
  )
 
}
export default SingleBlogPost

