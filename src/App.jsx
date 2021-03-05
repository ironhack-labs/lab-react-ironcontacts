import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: contacts.slice(0, 5)
    };
  }

  addRandomContact = () => {
    const unusedContacts = contacts.filter(
      contact => !this.state.contacts.includes(contact)
    );
    const contact =
      unusedContacts[Math.floor(Math.random() * unusedContacts.length)];
    if (contact) {
      this.setState({
        contacts: [...this.state.contacts, contact]
      });
    }
  };

  sortByPopularity = () => {
    const sortedContacts = [...this.state.contacts];
    sortedContacts.sort(
      (first, second) => second.popularity - first.popularity
    );
    this.setState({
      contacts: sortedContacts
    });
  };

  sortByName = () => {
    const sortedContacts = [...this.state.contacts];
    sortedContacts.sort((first, second) => (second.name > first.name ? -1 : 1));
    this.setState({
      contacts: sortedContacts
    });
  };

  removeContact = id => {
    const maintainedContacts = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState({
      contacts: maintainedContacts
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
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
            {this.state.contacts.map(contact => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>
                <td>
                  <button onClick={() => this.removeContact(contact.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul></ul>
      </div>
    );
  }
}

export default App;