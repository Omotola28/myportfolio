import React from 'react'
import PageContent from './../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'


const SingleBlogPost =({location: {state:{ props }}}) => {
	return(

		<PageContent>
			<BlogNav to="/blog" date={props.date}/>
			<BlogContent {...props}/>
		</PageContent> 
  )
 
}
export default SingleBlogPost

// class SingleBlogPost extends React.Component{

// 	constructor() {
// 		super()
// 		this.state ={post:null}
// 	}

// 	componentDidMount(){
// 		const {params} = this.props
// 		if(params && params.slug){
// 			client.getEntries({content_type:'post', 'field.slug':params.slug})
// 			.then((response) => {
// 				this.setState({post:response.items[0]})
// 			})
// 		}
// 		else
// 			console.log(params);
// 	}

// 	getParsedMarkdown(content){
// 		return{
// 			__html: marked(content, {sanitize:true})
// 		}
// 	}

// 	 render(){
// 	 	if(!this.state.post)
// 	 	{
// 	 		console.log(this.state.post);
// 	 		return <h1> Not found </h1>
// 	 	}
// 	 	return(
// 	 		<div className="">
// 	 		  <div>
// 	 		  	<p><a href='/author/dan/'>{this.state.fields.author.fields.fullname}</a> in <a href=''>coding</a>
// 	 		  		<i className='link-spacer'></i>
// 		   			<time className="" dateTime="2015-10-04">{this.state.post.fields.publishDate}</time>
//                 </p>
//                 <h1>{this.state.post.fields.title}</h1>
//                 <div dangerouslySetInnerHTML={this.getParsedMarkdown(this.state.article.fields.content)}/>
// 	 		  </div>
// 	 		 </div>
// 	 	)

// 	}
// }
// export default SingleBlogPost