import * as contentful from 'contentful'
import * as actions from './blog/actions'



const client = contentful.createClient({
  space: 'c3g21axvbohw',
  accessToken: '311345dabb923032220faba79a42168a05143c20dd46e59477eee729fd2ddd6d' 
})


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