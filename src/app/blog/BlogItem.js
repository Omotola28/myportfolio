import React from 'react'
import BlogNav from './shared/BlogNav'
import BlogContent  from './shared/BlogContent'

const BlogItem = (props) => {
	return (

		<div className="box"> 
		    <BlogContent limit={150} {...props}>
		    	<BlogNav to={{
		    		pathname: `/blog/${props.slug}`,
		    		state: { props }
		    	}} date={props.publishDate}/>
		    </BlogContent>
		</div>

)

}

export default BlogItem


