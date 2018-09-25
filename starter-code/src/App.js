import React, { Component } from 'react';
import './App.css';

import ContactList from './containers/ContactList/ContactList';
import contacts from './contacts.json';


class App extends Component {

    constructor() {
        super();
    }

    state = {
        contacts: contacts.slice(0, 5)
    };


    addRandomContact = () => {
        const randomContact = { ...contacts[Math.floor(Math.random() * contacts.length + 4)]};
        const newContacts = [ ...this.state.contacts.slice(), randomContact ];

        this.setState({
            contacts: newContacts
        });
    };

  render() {

      const { contacts } = this.state;

    return (
        <div className="main-wrapper">
            <h1 className="main-header">IronContacts</h1>
            <button id="main-button" onClick={ this.addRandomContact }>Add Random Button</button>
            <ContactList contacts={ contacts }/>
        </div>
    );
  }
}

export default App;
