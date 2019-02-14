/**
* Blog Actions
*/
import * as types from './types'


export function blogLoading(isLoading = true) {
  return { type: types.BLOG_LOADING, isLoading}
}

export function loadBlogSuccess(post) {

  return { type: types.LOAD_BLOG_SUCCESS, post}
}

export function onLoadMore(add=5) {

	return { type: types.LOAD_MORE, add}
}

export function handleFilter(filter) {
	return { type: types.FILTER, filter}
}

export function loadRelatedLink(values) {
	return { type: types.LOAD_RELATED_LINK_DATA, values}
}


