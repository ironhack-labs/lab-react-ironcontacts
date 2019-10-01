import React from 'react';
import ReacdivOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReacdivOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
