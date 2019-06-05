import React, { Component } from 'react'
import logo from './logo.svg'
import DyList from './components/DynamicList'

import './App.css'


class App extends Component {




  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <DyList />
      </div>
    );
  }
}

export default App;
