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
    this.setState({
      ironContacts: [
        ...this.state.ironContacts,
        randomContact,
      ]
    })
  }

  render() {
    return (
      <div className='App'> 
        <header>
          <h1 className='title'>IronContacts</h1>
        </header>
        <main>
          <SmallButton action={this.addRandomContact}>
            Add Random Contact
          </SmallButton>
          <ContactsTable contacts={this.state.ironContacts} />
        </main>
      </div>
    );
  }
}

export default App;
