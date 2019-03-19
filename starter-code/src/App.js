import React, { Component } from 'react';

import './App.css';

import Header from './components/Header'
import Contacts from './components/Contacts'


class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />
        <Contacts />


      </div>
    );
  }
}

export default App;
