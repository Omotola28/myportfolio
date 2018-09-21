import React from 'react';
import BlogItem from './blog/BlogItem';
import { connect } from 'react-redux';
import PageHeader from './../components/PageHeader';
import PageContent from './../components/PageContent';
import {Loader} from './../components/Loader';
import Filter from './Filter';
import * as actions from '../store/blog/actions'



class Blog extends React.Component {

  onLoadMore = () => {
      this.props.dispatch(actions.onLoadMore())
     
  }


  handleFilter = (param) => {
    this.props.dispatch(actions.handleFilter(param))
  }


  /**
   * Array filters items based on search criteria (query)
   */
  filterItems(query) {
    const filteredPost = this.props.blog.posts.filter((el => el.fields.category === query));
    return filteredPost.slice(0,this.props.blog.limit).map(({fields}, i) =>
                              <BlogItem key={i} {...fields} />)
  }

  render() {
    return (
      <div>
         <PageHeader color="hero is-small" title="Simply Blogging" addonText="Timeless Journalling">
         </PageHeader>
         { this.props.blog.loading 
           ?<Loader className="has-text-primary"></Loader>
           : <PageContent className="is-pulled-left post-margin scrollBar">
                { this.props.blog.filter === '' 
                  ? this.props.blog.posts.slice(0,this.props.blog.limit).map(({fields}, i) =>
                    <BlogItem key={i} {...fields} />)
                  :this.filterItems(this.props.blog.filter)
                }
              <a className="button is-warning is-large is-pulled-left" onClick={this.onLoadMore}>Load More</a>
              </PageContent>
         }
         <Filter handleFilter={this.handleFilter}/>
      </div>
    )
  }
}
function mapStateToProps(state, ownProps) {
  return {
    blog: state.blog,
    limit: state.blog.limit,
    filter: state.blog.filter
  }
}
export default connect(mapStateToProps)(Blog)