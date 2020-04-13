import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    restOfContacts: contacts.slice(5, contacts.length)
  }

  handleClickNewRandomContact = () => {
    let newRandomContact = undefined;
    let indexNewRestOfContactsToDelete = undefined;
    let newRestOfContacts = [...this.state.restOfContacts];
    let exist = (newRandomContactId) => {
      this.state.contacts.find(contact => contact.id === newRandomContactId)
    };

    if (this.state.restOfContacts.length !== 0) {
      // New contacts can still be added.
      do {
        newRandomContact = this.state.restOfContacts[Math.floor(Math.random() * (this.state.restOfContacts.length))];
        indexNewRestOfContactsToDelete = this.state.restOfContacts.indexOf(newRandomContact);
        newRestOfContacts.splice(indexNewRestOfContactsToDelete, 1);
      } while (exist(newRandomContact.id));
      
      this.setState({
        contacts: [...this.state.contacts, newRandomContact],
        restOfContacts: newRestOfContacts
      });
    } else {
      alert('There are no contacts to add');
    }
  };

  compareContactsByName = (contact1, contact2) => {
    const contactName1 = contact1.name.toUpperCase();
    const contactName2 = contact2.name.toUpperCase();

    if (contactName1 < contactName2) {
      return -1;
    } else if (contactName1 > contactName2) {
      return 1;
    } else {
      return 0;
    }
  };  

  handleClickSortByName = () => {
    this.setState({
      contacts: [...this.state.contacts.sort(this.compareContactsByName)]
    });
  };

  compareContactsByPopularity = (contact1, contact2) => {
    return contact2.popularity - contact1.popularity;
  };

  handleClickSortByPopularity = () => {
    this.setState({
      contacts: [...this.state.contacts.sort(this.compareContactsByPopularity)]
    });
  };

  handleClickDeleteContact = (contactId) => {
    const contactsCopy = [...this.state.contacts];
    const contactIndex = contactsCopy.findIndex(contact => contact.id === contactId);
    const restOfContactsCopy = [...this.state.restOfContacts, contactsCopy[contactIndex]];

    contactsCopy.splice(contactIndex, 1);

    this.setState({
      contacts: contactsCopy,
      restOfContacts: restOfContactsCopy
    });
  };

  render() {
    return (
      <div>
        <h1 className='App-h1'>IronContacts</h1>
        <button onClick={this.handleClickNewRandomContact}>Add Random Contact</button>
        <button onClick={this.handleClickSortByName}>Sort by name</button>
        <button onClick={this.handleClickSortByPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th className='App-th'>Picture</th>
              <th className='App-th'>Name</th>
              <th className='App-th'>Popularity</th>
              <th className='App-th'>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => (
              <Contact key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} clickToDelete={() => this.handleClickDeleteContact(contact.id)}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
