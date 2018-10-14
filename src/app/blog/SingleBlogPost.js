import React from 'react'
import PageContent from './../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import RelatedLinks from './RelatedLinks'


const SingleBlogPost =({location: {state:{ props }}}) => {
	return(
		<div className="columns is-mobile">
			<PageContent style={{height: '680px', margin: '0 1em 0 14em'}} className="scrollBar column is-three-fifths" id="singlePost">
				<BlogNav to="/blog" date={props.date}/>
				<BlogContent {...props}/>
			</PageContent> 
			<RelatedLinks links={props.related}/>
		</div>

		
  )
 
}
export default SingleBlogPost

