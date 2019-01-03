import { combineReducers } from 'redux'
import blog from './blog/reducer'
import contact from './contact/contactReducer'
import {buttonData} from './project/projectReducer'
import {reducer as formReducer } from 'redux-form'
import { routerReducer } from 'react-router-redux'




export const rootReducer = combineReducers({
  blog,
  routerReducer,
  buttonData,
  contact,
  form: formReducer
})