import React from 'react'
import PageContent from './../../components/PageContent'
import BlogNav from './shared/BlogNav'
import BlogContent from './shared/BlogContent'
import RelatedLinks from './RelatedLinks'
import { client } from './../../store/contentfulClientApi'

const splitUrl = (string) => {
  let str = string.split('=')[1];
  return str;
}

const getEntry = (id) => {
 return client.getEntry( id )
    .then(function (entry){
       return entry; 
    })
    .catch( error =>  {
      console.log(error);
    })

}
//The promise value can only be used wrapped arount that whole church of code
const getURL = () => {
  let url = window.location.search;
  let entry = splitUrl(url);
  let data = getEntry(entry);
  let obj = {};

  data.then(function(value){
        Object.assign(obj, value);
 })
 return obj;
}


class SingleBlogPost extends React.Component {
 
  render(){
    let data;
    data = this.props.location.state;
    const { props } = data;
    let obj = {};
    Object.assign(obj, getURL());
    return (
      <div>
      { (() => {
      if( data === undefined )
      {
        return (
          <div className="columns is-mobile">
          <PageContent style={{height: '680px', margin: '0 1em 0 14em'}} className="scrollBar column is-three-fifths" id="singlePost">
          <BlogNav to="/blog" date={obj.publishDate}/>
          <BlogContent {...obj}/>
          </PageContent> 
          <RelatedLinks links={obj.related} />
          </div>
        );
      }
      else 
      {
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
      })()}  
      </div>
    );
  }
}
export default SingleBlogPost
