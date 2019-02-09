import React from 'react'
import Markdown from 'react-markdown'


class BlogContent extends React.Component {
  render(){

    return (
      <article className="media">
      <div className="media-left">
      <figure className="image is-64x64">
      <img src={this.props.author.fields.avatar.fields.file.url + '?w=64&h=64'} alt="Omotola" />
      </figure>
      </div>
      <div className="media-content">
      <div className="content">
      <h1>{this.props.title}</h1>
      <Markdown
      source={
        this.props.limit
        ? this.props.content.split(" ").splice(0,this.props.limit).join(" ").concat('...')
        : this.props.content
      }
      />
      </div>
      { this.props.children }
      </div>
      </article>
    )
  }
 }
export default BlogContent
