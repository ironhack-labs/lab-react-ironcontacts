import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Table from '../src/components/Table/Table'


class App extends Component {
  render() {

    const someContacts = contacts.map(oneContact => <h2>{oneContact.name}</h2>)
    
    
    // 
    return (
      <div className="App">

      <div>

          {someContacts}
      </div>
        
      </div>
    );
  }
}

export default App;
