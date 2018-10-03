import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import ICListContainer from './components/IronContactsList/ICListContainer';

class App extends Component {
  render() {
    return (
      <div>
        <ICListContainer/>
      </div>
    )
  }
}

export default App;
