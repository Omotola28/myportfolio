import React from 'react';
import BlogItem from './blog/BlogItem';
import { connect } from 'react-redux';
import PageHeader from './../components/PageHeader';
import PageContent from './../components/PageContent';
import {Loader} from './../components/Loader';

class Blog extends React.Component {
  render() {
    return (
      <div>
         <PageHeader color="hero is-medium" title="Simply Blogging" >
         </PageHeader>
         { this.props.blog.loading 
           ?<Loader className="has-text-primary"></Loader>
           : <PageContent className="display">
                { this.props.blog.posts.map(({fields}, i) =>
                <BlogItem key={i} {...fields} />
                )}
              </PageContent>
         }
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog
  }
}
export default connect(mapStateToProps)(Blog)