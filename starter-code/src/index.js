import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
