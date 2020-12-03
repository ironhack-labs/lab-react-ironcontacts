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
    let randomContact =
      allContacts[Math.floor(Math.random() * allContacts.length)];
    let newArray = [...this.state.displayedContacts, randomContact];
    this.setState({
      displayedContacts: newArray,
    });
  };

  sortbyContactName = () => {
    let sortedByName = this.state.displayedContacts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({ displayedContacts: sortedByName });
  };

  sortbyPopularity = () => {
    let sortedByPopularity = this.state.displayedContacts.sort((a, b) =>
      a.popularity > b.popularity ? -1 : b.popularity > a.popularity ? 1 : 0
    );
    this.setState({ displayedContacts: sortedByPopularity });
  };

  removeUser(index) {
    this.state.displayedContacts.splice(index, 1);
    this.setState({
      displayedContacts: this.state.displayedContacts,
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div>
          <button onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
        </div>
        <div>
          <button onClick={() => this.sortbyContactName()}>Sort by name</button>
        </div>
        <div>
          <button onClick={() => this.sortbyPopularity()}>
            Sort by Popularity
          </button>
        </div>

        <table>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>

          {this.state.displayedContacts.map((contact, index) => (
            <tr key={contact.id}>
              <td key={contact.pictureUrl}>
                <img
                  src={contact.pictureUrl}
                  alt="contact pic"
                  style={{ height: '100px' }}
                />
              </td>
              <td key={contact.name}>{contact.name}</td>
              <td key={contact.popularity}>{contact.popularity.toFixed(2)}</td>
              <td key={index}>
                <button onClick={() => this.removeUser(index)}>
                  User Delete
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
