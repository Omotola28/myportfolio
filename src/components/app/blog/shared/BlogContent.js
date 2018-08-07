import React from 'react'
import * as Markdown from 'react-markdown'

const BlogContent = (props) => (
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.icon} alt="Image" />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <h1>{props.title}</h1>
        <Markdown
          source={
            props.limit
            ? props.content.split(" ").splice(0,props.limit).join(" ").concat('...')
            : props.content
          }
        />
      </div>
      { props.children }
    </div>
  </article>
)
export default BlogContent