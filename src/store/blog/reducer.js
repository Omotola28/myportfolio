/**
* Blog Reducer  ##Doesnt have anything 
*/
import initialState from '../../store/initialState'
import * as types from './types'
export default function blogReducer(state = initialState.blog, action) {
  switch (action.type) {
    case types.BLOG_LOADING:
      return {
        ...state,
        loading: action.isLoading
      }
    case types.LOAD_BLOG_SUCCESS:
      return {
        ...state,
        posts: action.post,
        loading: false
      }
   default:
     return state
  }
}