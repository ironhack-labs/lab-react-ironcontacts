import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import contacts from "./contacts.json"

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
