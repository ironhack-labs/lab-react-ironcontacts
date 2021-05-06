import React from 'react';
import './App.css';

import contacts from "./contacts.json";

class App extends React.Component {

  state = {
    contacts: contacts.slice(0,5)
  }

  addRandomContact = () => {
    let randomContact;
    do {
      randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    } while  (this.state.contacts.map(contact => contact.id).includes(randomContact.id))
    this.setState(state => ({
      contacts: [randomContact, ...state.contacts]
    }))
  }

  sortByName = () => {
    const sortedByName = [...this.state.contacts].sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
    this.setState(() => ({
      contacts: sortedByName
    }))
  }

  sortByPopularity = () => {
    const sortedByPopularity = [...this.state.contacts].sort((a, b) => b.popularity - a.popularity);
    this.setState(() => ({
      contacts: sortedByPopularity
    }))
  }

  deleteContact = id => {
    const contactsCopy = [...this.state.contacts];
    const contactIndex = contactsCopy.findIndex(contact => contact.id === id);
    contactsCopy.splice(contactIndex, 1)
    this.setState(() => ({
      contacts: contactsCopy
    }))
  }

  render() {

    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {this.state.contacts.map(contact => 
            <tr key={contact.id}>
              <td><img src={contact.pictureUrl} alt={contact.name} height="100px"/></td>
              <td>{contact.name}</td>
              <td>{Math.round(contact.popularity * 100) / 100}</td>
              <td><button onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
            </tr>  
          )}
        </table>
      </div>
    );
  }
}

export default App;
