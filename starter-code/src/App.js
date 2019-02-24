
import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'
import Header from './components/misc/Header';
import ContactsTable from './components/contacts/ContactsTable';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
            
        
        <ContactsTable  contacts={contacts}/>
        
      </div>
    );
  }
}

export default App;
