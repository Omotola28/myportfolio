import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router-dom';
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import createHistory from "history/createBrowserHistory";
import initialState from './store/initialState'

// Redux Store
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { loadBlog } from './store/Blog';

const history = createHistory();

const store = configureStore(history, initialState);
store.dispatch(loadBlog())

// Create an enhanced history that syncs navigation events with the store
//const connectHistoryAndStore = syncHistoryWithStore(createHistory(), store) 


ReactDOM.render((
	<Provider store={store}>
		<Router history={history}>
		    <App />
		</Router>
	</Provider>
  ), document.getElementById('root'))
registerServiceWorker()
