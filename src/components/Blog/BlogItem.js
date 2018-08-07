import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class BlogItem extends React.Component {

	render(){
		const {post} = this.props
		return (
		<article className="post">
		   <div className="">
		   		<h2><Link to={`posts/$post.fields.slug`}><a href="">{post.fields.title}</a></Link></h2>
		   		<p>{post.fields.content}</p>
		   		<p className="meta"> 
		   		   <img src={post.fields.author.fields.avatar.fields.file.url + '?w=64&h=64'} alt={post.fields.author.fields.fullName} className=""/>
		   		   <a href="">{post.fields.author.fields.fullName}</a>
		   		   <i className='link-spacer'></i>
		   		   <time className="" dateTime="2015-10-04">{post.fields.publishDate}</time>
		   		</p>
		   	</div>
		 </article>	

	) 
	}
}
BlogItem.propTypes ={
	post: PropTypes.object
}
export default BlogItem


