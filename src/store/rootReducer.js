import { combineReducers } from 'redux'
import contact from './contact/contactReducer'
import {reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'




export const rootReducer = combineReducers({
  routerReducer,
  contact,
  form: formReducer
})