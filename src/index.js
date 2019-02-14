import React from 'react';
import ReactDOM from 'react-dom';
import { Router} from 'react-router-dom';
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';
import createHistory from "history/createBrowserHistory";
import initialState from './store/initialState'
import '../public/favicon.ico'

// Redux Store
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';
import { loadBlog, relatedLinks } from './store/Blog';

const history = createHistory();

const store = configureStore(history, initialState);
store.dispatch(loadBlog())
store.dispatch(relatedLinks())

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))
registerServiceWorker()
