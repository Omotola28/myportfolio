import React from 'react';
import BlogItem from './blog/BlogItem';
import { connect } from 'react-redux';
import PageHeader from './../components/PageHeader';
import PageContent from './../components/PageContent';
import {Loader} from './../components/Loader';
import * as actions from '../store/blog/actions'



class Blog extends React.Component {

  onLoadMore = () => {
      this.props.dispatch(actions.onLoadMore())
     
    }


  render() {
    return (
      <div>
         <PageHeader color="hero is-small" title="Simply Blogging" >
         </PageHeader>
         {console.log(this.props.limit)}
         { this.props.blog.loading 
           ?<Loader className="has-text-primary"></Loader>
           : <PageContent className="scrollBar">
                { this.props.blog.posts.slice(0,this.props.blog.limit).map(({fields}, i) =>
                  <BlogItem key={i} {...fields} />
                )}
              <a className="button is-warning is-large is-pulled-left" onClick={this.onLoadMore}>Load More</a>
              </PageContent>
         }
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog,
    limit: state.blog.limit
  }
}
export default connect(mapStateToProps)(Blog)