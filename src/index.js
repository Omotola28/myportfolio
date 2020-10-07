import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import createHistory from "history/createBrowserHistory";
import initialState from './store/initialState'


// Redux Store
import { Provider } from 'react-redux';
import { configureStore } from './store/configureStore';

const history = createHistory();

const store = configureStore(history, initialState);

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>
  ),
  document.getElementById('root'));
serviceWorker.unregister();
