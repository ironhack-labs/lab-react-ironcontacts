import React from 'react';
import logo from './logo.svg';
import './App.css';
import allContacts from './contacts.json';
console.log(allContacts);
const contacts = allContacts.slice(0, 5);
console.log(contacts);

class App extends React.Component {
  state = {
    displayedContacts: contacts,
  };

  addRandomContact = () => {
    const randomContact =
      allContacts[Math.floor(Math.random() * allContacts.length)];
    const newArray = [...this.state.displayedContacts, randomContact];
    this.setState({
      displayedContacts: newArray,
    });
  };

  sortName = () => {
    const sortedNames = this.state.displayedContacts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      displayedContacts: sortedNames,
    });
  };

  sortPopularity = () => {
    const sortedPop = this.state.displayedContacts.sort((a, b) =>
      a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0
    );
    this.setState({
      displayedContacts: sortedPop,
    });
  };

  deleteContact = (id) => {
    const index = this.state.displayedContacts.findIndex((c) => c.id == id);
    const removedContact = this.state.displayedContacts.splice(index, 1);
    this.setState({
      displayedContacts: this.state.displayedContacts,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
          <button onClick={() => this.sortName()}>Sort by name</button>
          <button onClick={() => this.sortPopularity()}>
            Sort by popularity
          </button>
        </div>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>

          {this.state.displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt="actor picture"
                  style={{ height: '100px' }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>
                <button onClick={() => this.deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
