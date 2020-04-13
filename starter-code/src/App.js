import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    ORIGINAL_NUMBER_OF_CONTACTS: contacts.length
  }

  handleClickNewRandomContact = () => {
    const restOfContacts = contacts.slice(5, contacts.length);
    let newRandomContact = undefined;
    let exist = (newRandomContactId) => {
      restOfContacts.find(contact => contact.id === newRandomContactId)
    };

    if (this.state.contacts.length !== this.state.ORIGINAL_NUMBER_OF_CONTACTS) {
      // New contacts can still be added.
      do {
        newRandomContact = restOfContacts[Math.floor(Math.random() * (restOfContacts.length))];
      } while (exist(newRandomContact.id));
      
      this.setState({
        contacts: [...this.state.contacts, newRandomContact]
      });

      contacts.splice(contacts.indexOf(newRandomContact), 1);
    } else {
      alert('There are no contacts to add');
    }
  };

  render() {
    return (
      <div>
        <h1 className='App-h1'>IronContacts</h1>
        <button className='App-button' onClick={this.handleClickNewRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th className='App-th'>Picture</th>
              <th className='App-th'>Name</th>
              <th className='App-th'>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map(contact => (
              <Contact key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}/>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
