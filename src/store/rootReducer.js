import { combineReducers } from 'redux'
import blog from './blog/reducer'
import { routerReducer } from 'react-router-redux'
import contact from './contact/contactReducer'
import {reducer as formReducer } from 'redux-form'

export const rootReducer = combineReducers({
  blog,
  routerReducer,
  contact,
  form: formReducer
})
