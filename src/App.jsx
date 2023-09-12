import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5),
      remainingContacts: contacts.slice(5),
    };
  }

  addRandomContact = () => {
    const { remainingContacts } = this.state;
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const newContact = remainingContacts[randomIndex];
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, newContact],
        remainingContacts: prevState.remainingContacts.filter(
          (contact) => contact !== newContact
        ),
      }));
    }
  };

  sortByName = () => {
    const sortedContacts = [...this.state.contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    this.setState({ contacts: sortedContacts });
  };

  sortByPopularity = () => {
    const sortedContacts = [...this.state.contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({ contacts: sortedContacts });
  };

  // Function to delete a contact by ID
  deleteContact = (id) => {
    const updatedContacts = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  renderTrophy = (won) => {
    if (won) {
      return <span role="img" aria-label="trophy">🏆</span>;
    }
    return null;
  };

  render() {
    return (
      <div className="App">
        <h1>Contacts List</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>{this.renderTrophy(contact.wonOscar)}</td>
                <td>{this.renderTrophy(contact.wonEmmy)}</td>
                <td>
                  <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
