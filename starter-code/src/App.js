import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json';
// import display5Contacts from './components/stateful/display5Contacts';
import tableContacts from './components/stateful/tableContacts';

class App extends Component {

  constructor(){
    
    super ()
      
    this.state = {
      firstFive: allContacts.splice(0, 5)
    }
  }
 
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
          <table className = "App-table">
            <thead className = "App-table-head">
              <tr>
                <th colspan="3">IronConctacts</th>
              </tr>
            </thead>
            <tbody className = "App-table-body">
              <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
              </tr>
            </tbody>
              {this.state.firstFive.map((tableContacts, idx) => <tableContacts {...tableContacts} key={idx} />)}
          </table>
        </div>
        
      );
    }
}

export default App;
