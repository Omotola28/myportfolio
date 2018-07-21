import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
