import React from 'react'
import * as contentful from 'contentful'

class Blog extends React.Component {
  state = {
    posts: []
  }

  client = contentful.createClient({
  space: 'c3g21axvbohw',
  accessToken: '311345dabb923032220faba79a42168a05143c20dd46e59477eee729fd2ddd6d' })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }
  fetchPosts = () => this.client.getEntries()
  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }
  render() {
    return (
      <div>
		  <p>This is the Blog Page</p>
		  <br/>
		  { this.state.posts.map(({fields}, i) =>
		    <pre key={i}>{JSON.stringify(fields, null, 2)}</pre>
		  )}
      </div>
    )
  }
}
export default Blog