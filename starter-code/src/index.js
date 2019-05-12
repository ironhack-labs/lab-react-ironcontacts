import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Uikit JS import
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

// Uikit CSS import
import "uikit/dist/css/uikit.min.css";

// index styles
import './index.css';

// loads the Icon plugin
UIkit.use(Icons);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
