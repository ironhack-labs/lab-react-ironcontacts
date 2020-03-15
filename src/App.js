import React, { Component } from 'react';
import Contacts from "./contacts.json"
import ContactList from "./ContactList/ContactList"
import "./ContactList/ContactList.css"
import './App.css';

class App extends Component {
  state = {...Contacts};

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        {console.log(this.state)}
        <ContactList contact={this.state} />
      </div>
    );
  }
}

export default App;
