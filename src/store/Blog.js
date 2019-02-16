import * as contentful from 'contentful'
import * as actions from './blog/actions'
import { client } from './contentfulClientApi'

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

export function loadBlog() {
  //const error = err => console.log(err)


  return dispatch => {
  	dispatch(actions.blogLoading())
  	return client.getEntries({content_type: 'post', order: 'sys.createdAt'})
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
