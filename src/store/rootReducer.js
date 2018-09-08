import { combineReducers } from 'redux'
import blog from './blog/reducer'
import { routerReducer } from 'react-router-redux'


export const rootReducer = combineReducers({
  blog,
  routerReducer
})