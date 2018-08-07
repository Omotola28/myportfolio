import React from 'react';
import BlogItem from './BlogItem';
import client from '../service/Client';



class Blog extends React.Component {
  constructor(){
    super()
    this.state = {posts: []}

  }
  
  
  componentDidMount() {
      client.getEntries({content_type: 'post'}).then( response => {
          this.setState({posts: response.items});
  })
  }
  render() {
    const posts = this.state.posts.map((post, i)=> <BlogItem key={i} id={i} post={post} />)
    return (
      <div className="category-page-posts animated fadeIn">
         <div className="animated fadeIn">
            {posts}
         </div>
		
      </div>
    )
  }
}
export default Blog