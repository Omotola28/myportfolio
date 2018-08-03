import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import 'tachyons';
import registerServiceWorker from './registerServiceWorker';


//client.getEntries().then(entries => {
  //entries.items.forEach(entry => {
    //if(entry.fields) {
      //console.log(entry.fields)
    //}
  //})
//})

ReactDOM.render(
	<Router>
        <App />
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
