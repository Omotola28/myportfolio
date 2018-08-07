import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={browserHistory}>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
