import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router'



export function configureStore(history, initialState) {
  return createStore(
    connectRouter(history)(rootReducer), 
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  )
}