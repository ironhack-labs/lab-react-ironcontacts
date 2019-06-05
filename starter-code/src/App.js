import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Containeer from './components/Containeer'

class App extends Component {
  render() {
    return ( 
      <div className = "App" >
        <h1>IronContacts</h1>
        <Containeer />

      </div>
    );
  }
}

export default App;