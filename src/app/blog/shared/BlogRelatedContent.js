import React from 'react'
import Markdown from 'react-markdown'
import {Loader} from './../../../components/Loader';
import { connect } from 'react-redux';


class BlogRelatedContent extends React.Component {
   constructor() {
    super();
  }

  render(){
    return (
      <div>
        { this.props.data == undefined
          ? <Loader className="has-text-primary"/>
          :  <article className="media">
              <div className="media-left">
                <figure className="image is-64x64">
               
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <h1>{this.props.data.fields.title}</h1>
                  <Markdown
                    source={
                       this.props.data.fields.content
                    }
                  />
                </div>
              </div>
             </article>
          }
      </div>
    )

  }
}
function mapToStateProps(state, OwnProps)
{
  console.log(state);
  return {
    data: state.blog.data
   }
}
export default connect(mapToStateProps)(BlogRelatedContent)

