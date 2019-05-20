import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import ListContacts from './component/ListContacts';

class App extends Component {

  fiveContacts = contacts.slice(0, 5)

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronContacts</h1>
        </header>
        <ListContacts fiveContacts={this.fiveContacts}/>
      </div>
    );
  }
}

export default App;
 
