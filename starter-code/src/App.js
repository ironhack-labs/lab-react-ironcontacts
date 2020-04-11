import React, { Component } from 'react';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable';
import SmallButton from './components/SmallButton';
import './App.css';

const NUM_CONTACTS_TO_IMPORT = 5;

class App extends Component {
  constructor() {
    super();
    this.state = {
      ironContacts: contacts.filter((contact, index) => {
        if (index < NUM_CONTACTS_TO_IMPORT) {
          contact.index = index;
          return contact;
        }
        return null;
      }),
    }
  }

  selectRandom = (range) => {
    return Math.floor((Math.random() * range));
  }

  addRandomContact = () => {
    let randomContactIndex;
    do {
      randomContactIndex = this.selectRandom(contacts.length);
    } while (this.state.ironContacts.some(contact => contact.index === randomContactIndex))
    const randomContact = contacts[randomContactIndex];
    randomContact.index = randomContactIndex;
    this.setState({
      ironContacts: [
        ...this.state.ironContacts,
        randomContact,
      ]
    })
  }

  sortByName = () => {
    const sortedContacts = this.state.ironContacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    })
    this.setState({
      ironContacts: sortedContacts,
    })
  }

  sortByPopularity = () => {
    const sortedContacts = this.state.ironContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return -1;
      } else if (a.popularity < b.popularity) {
        return 1
      } else {
        return 0;
      }
    })
    this.setState({
      ironContacts: sortedContacts,
    })
  }

  deleteContact = (event) => {
    const contactToDelete = parseInt(event.target.value);
    const contactToDeleteIndex = this.state.ironContacts.findIndex(contact => {
      return contact.index === contactToDelete;
    });
    const updatedContacts = [...this.state.ironContacts];
    updatedContacts.splice(contactToDeleteIndex, 1);
    this.setState({
      ironContacts: updatedContacts,
    })
  }

  render() {
    return (
      <div className='App'> 
        <header>
          <h1 className='title'>IronContacts</h1>
        </header>
        <main>
          <SmallButton action={this.addRandomContact}>Add Random Contact</SmallButton>
          <SmallButton action={this.sortByName}>Sort by name</SmallButton>
          <SmallButton action={this.sortByPopularity}>Sort by popularity</SmallButton>
          <ContactsTable contacts={this.state.ironContacts} deleteContact={this.deleteContact} />
        </main>
      </div>
    );
  }
}

export default App;
