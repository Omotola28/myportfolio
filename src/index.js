import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

// Redux Store
import { Provider } from 'react-redux';
import { configureStore } from './store';
import { loadBlog } from './store/Blog'

const store = configureStore();
store.dispatch(loadBlog())

ReactDOM.render((
	<Provider store={store}>
		<Router>
		    <App />
		</Router>
	</Provider>
  ), document.getElementById('root'))
registerServiceWorker()
