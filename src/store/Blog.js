import * as contentful from 'contentful'
import * as actions from './blog/actions'
import { client } from './contentfulClientApi'

const regex = /-([A-Za-z0-9]*)+\_/;

const splitUrl = (string) => {
  let str = string.split(regex)[1];
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

export function loadBlog() {

  return dispatch => {
  	dispatch(actions.blogLoading())
  	return client.getEntries({content_type: 'post', order: 'fields.publishDate'})
        .then(({items}) => {
      	setTimeout(() => dispatch(actions.loadBlogSuccess(items)), 1000)
      })
      .catch(error => {
      	console.log(error)
      	dispatch(actions.blogLoading(false))
      })
    }
}

export function relatedLinks(){
  let url = window.location.search;
  let entry = splitUrl(url);
  let data = getEntry(entry);
  let obj;
  return dispatch => {
    dispatch(actions.blogLoading())
    data.then(function(values){
        setTimeout(() => dispatch(actions.loadRelatedLink(values)), 1000)
    })
    .catch(error =>{
      console.log(error);
    })
  }
}
