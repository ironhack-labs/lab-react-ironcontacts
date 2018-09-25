import React, { Component } from 'react';
import './App.css';

import ContactList from './containers/ContactList/ContactList';
import contacts from './contacts.json';


class App extends Component {

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

    sortListByName = () => {
        const sortContacts = this.state.contacts.slice()
            .sort(function( c1, c2 ){
            return c1.name.localeCompare(c2.name);
        });

        this.setState({
            contacts: sortContacts
        });
    };

    sortListByPopularity = () => {
        const sortContacts = this.state.contacts.slice()
            .sort((c1,c2) => c1.popularity - c2.popularity);

        this.setState({
            contacts: sortContacts
        });
    };

    deleteContact = (name) => {
        const newContacts = this.state.contacts
            .filter( c => c.name !== name);

        this.setState({
            contacts: newContacts
        });
    };

  render() {

      const { contacts } = this.state;

    return (
        <div className="main-wrapper">
            <h1 className="main-header"><span>Iron</span>Contacts</h1>
            <div className="btn-group">
                <button id="main-button" onClick={ this.addRandomContact }>Add Random Button</button>
                <button id="main-button" onClick={ this.sortListByName }>Sort by name</button>
                <button id="main-button" onClick={ this.sortListByPopularity }>Sort by popularity</button>
            </div>
            <ContactList contacts={ contacts } delContact={ this.deleteContact }/>
        </div>
    );
  }
}

export default App;
