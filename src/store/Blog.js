import * as contentful from 'contentful'
import * as actions from './blog/actions'
import { client } from './contentfulClientApi'


//const client = contentful.createClient({
//  space: process.env.REACT_APP_CONTENTFUL_SPACE,
//  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESSTOKEN
//})
//

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

//'fields.category': handleFilter
