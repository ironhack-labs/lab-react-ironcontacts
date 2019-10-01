import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CelebrityList from './CelebrityList.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>
          <h1 className="App-title">IronContacts</h1>
        </header>
        <p className="App-intro">
        </p>
          <CelebrityList ></CelebrityList>
      </div>
    );
  }
}

export default App;
