import React from 'react'
import PageContent from './../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import RelatedLinks from './RelatedLinks'
import { client } from './../../store/contentfulClientApi'
import { connect } from 'react-redux';
import BlogRelatedContent from './shared/BlogRelatedContent'
import {Loader} from './../../components/Loader';

class SingleBlogPost extends React.Component {

  render(){
    let data;
    let info;
    data = this.props.location.state;

    console.log(this.props);
      
     if( this.props.data !== undefined  && data === undefined )
      {
        console.log(this.props);
        return (
          <div className="columns is-mobile">
          <PageContent style={{height: '680px', margin: '0 1em 0 14em'}} className="scrollBar column is-three-fifths" id="singlePost">
          <BlogNav to="/blog" date={this.props.data.fields.publishDate}/>
          <BlogRelatedContent />
          </PageContent>
          <RelatedLinks links={this.props.data.fields.related} />
          </div>
        );
      }
      else if( data )
      {
      	const { props } = data;
        return (
          <div className="columns is-mobile">
          <PageContent style={{height: '680px', margin: '0 1em 0 14em'}} className="scrollBar column is-three-fifths" id="singlePost">
          <BlogNav to="/blog" date={props.publishDate}/>
          <BlogContent {...props}/>
          </PageContent>
          <RelatedLinks links={props.related} />
          </div>
        );
      }
      else {
        return (
          <Loader className="has-text-primary"/>
        )
       
      }
  }
}
function mapToStateProps(state, OwnProps)
{
  return {
	  data: state.blog.data
	 }
}
export default connect(mapToStateProps)(SingleBlogPost)
