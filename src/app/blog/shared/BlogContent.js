import React from 'react'
import Markdown from 'react-markdown'


const BlogContent = (props) => {
  return (
    <article className="media">
      <div className="media-left">
        <figure className="image is-64x64">
          <img src={props.author.fields.avatar.fields.file.url + '?w=64&h=64'} alt="Omotola" />
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

}
export default BlogContent