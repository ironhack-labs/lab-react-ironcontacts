import React from 'react';
import './App.css';
import contacts from './contacts.json';
console.log('Total contacts:', contacts.length);

class App extends React.Component {

  state = {
    contactsShown: contacts.slice(0, 5),
    contactsHidden: contacts.slice(5, contacts.length),
    addButton: 'Add Random Contact',
  };

  getRandomContact = () => {
    if (this.state.contactsHidden.length > 0) {
      const randomNum = Math.floor(Math.random() * this.state.contactsHidden.length);
      this.state.contactsShown.push(this.state.contactsHidden[randomNum]);
      this.state.contactsHidden.splice(randomNum, 1);
      this.setState({ contactsShown: this.state.contactsShown });
    } else {
      this.setState({ addButton: 'No more available contacts' });
    };
  };

  displayContacts = () => {
    const contactJsx = this.state.contactsShown.map(contact => {
      return (
        <tr key={`${contact.id}`}>
          <td><img src={contact.pictureUrl} alt={contact.name} /></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <td><button className="delete-button" onClick={() => this.deleteContact(contact.id)}>Delete</button></td>
        </tr>
      );
    });
    return contactJsx;
  };

  sortByName = () => {
    this.state.contactsShown.sort((user1, user2) => user1.name.localeCompare(user2.name))
    this.setState({ contactsShown: this.state.contactsShown });
  };

  sortByPop = () => {
    this.state.contactsShown.sort((user1, user2) => user2.popularity - user1.popularity)
    this.setState({ contactsShown: this.state.contactsShown });
  };

  deleteContact = id => {
    const idxToRemove = this.state.contactsShown.findIndex(contact => contact.id === id);
    this.state.contactsHidden.push(this.state.contactsShown[idxToRemove]);
    this.state.contactsShown.splice(idxToRemove, 1);
    this.setState({ contactsShown: this.state.contactsShown });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <h2><strong>Shown contacts: </strong>{this.state.contactsShown.length} | <strong>Hidden contacts: </strong>{this.state.contactsHidden.length}</h2>
        <button className="add-button" onClick={this.getRandomContact}>{this.state.addButton}</button>
        <button className="sortn-button" onClick={this.sortByName}>Sort by name</button>
        <button className="sortp-button" onClick={this.sortByPop}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.displayContacts()}
          </tbody>
        </table>
      </div>
    );
  };
};

export default App;
