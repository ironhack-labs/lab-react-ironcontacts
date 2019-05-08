import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import styles, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding:0;
    margin:0;
  }
  html{
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
`

ReactDOM.render(<div><GlobalStyle/><App /></div>, document.getElementById('root'));
registerServiceWorker();
