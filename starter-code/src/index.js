import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import "antd/dist/antd.css";
import "./index.css";

import { DatePicker } from 'antd';

ReactDOM.render( <div>
  <App />
  <DatePicker />, mountNode
  </div>, document.getElementById('root'));
registerServiceWorker();
