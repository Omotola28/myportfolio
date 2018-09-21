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
    case types.LOAD_MORE:
      return{
        ...state,
        limit: action.add + state.limit
      }
    case types.FILTER:
      return{
        ...state,
        filter: action.filter
      }
   default:
     return state
  }
}