import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'







class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>

      <div>
        <table>
          <tr>
            <th>Pic</th>
            <th>Name</th>
            <th>Pop</th>
          </tr>
          <Contact imgsrc={}/>
       


        </table>




      </div>



    );
  }
}

export default App;
