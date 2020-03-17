// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';


// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();



import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'))
registerServiceWorker();