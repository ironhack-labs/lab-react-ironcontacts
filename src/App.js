import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactList from './ContactList';
import SearchField from './SearchField';
// import './App.css';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    query: ''
  };

  setQuery = queryInput => {
    this.setState({
      query: queryInput
    });
  }


  addContact = () => {
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    if (this.state.contacts.find(contact => contact.id === random.id)) {
      if (this.state.contacts.length < contacts.length) {
        this.addContact();
      }
      return;
    }

    this.setState({
      contacts: [random, ...this.state.contacts]
    });

  };

  sortByName = () => {
    const sorted = [...this.state.contacts];
    sorted.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sorted
    });
  };

  sortByPopularity = () => {
    const sorted = this.state.contacts.slice();
    sorted.sort((a, b) => b.popularity - a.popularity);

    this.setState({
      contacts: sorted
    });
  }


  render() {
    return (
      <div className="App" >
        <h1>IronContacts</h1>

        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by sort by popularity</button>

        <SearchField
          setQuery={this.setQuery}
          query={this.state.query}
        />

        <ContactList
          contacts={this.state.contacts}
          query={this.state.query}
        />


      </div>
    );
  }
}

export default App;
