import React from 'react'
import PageContent from './../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import CommentSection from './CommentSection'


const SingleBlogPost =({location: {state:{ props }}}) => {
	return(

		<div className="columns">
			<PageContent style={{height: '680px', margin: '0 0.5em 0 8em'}} className="scrollBar column is-three-fifths">
				<BlogNav to="/blog" date={props.date}/>
				<BlogContent {...props}/>
			</PageContent> 
			<CommentSection/>
		</div>

		
  )
 
}
export default SingleBlogPost

