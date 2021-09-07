
import './App.css';
import React, { Component } from 'react';

import ContactList from './components/ContactList'
import contacts from './contacts.json'


class App extends Component {
  state = {
    //Iteration 1: 5 first contacts
    contacts:contacts.slice(0,5)
  }
  render() {
    return (
  <div class="Contact List">
        <ContactList contacts={this.state.contacts}/>
      </div>
  )
}
}

export default App;
