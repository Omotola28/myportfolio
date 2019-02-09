import { combineReducers } from 'redux'
import blog from './blog/reducer'
import { routerReducer } from 'react-router-redux'
import contact from './contact/contactReducer'
import {reducer as formReducer } from 'redux-form'
import {buttonData} from './project/projectReducer'


export const rootReducer = combineReducers({
  blog,
  routerReducer,
  buttonData,
  contact,
  form: formReducer
})
