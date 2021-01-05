import React from 'react';
import './App.css';
import contacts from './contacts.json';

const randomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

class App extends React.Component {
  state = {
    contactsToDisplay: contacts.slice(0, 5),
  };

  addContact = () => {
    const randomContact = contacts.splice(randomNumber(contacts.length), 1);
    this.setState({
      contactsToDisplay: [...this.state.contactsToDisplay, randomContact[0]],
    });
  };

  sortedByName = () => {
    this.setState({
      contactsToDisplay: [...this.state.contactsToDisplay].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    });
  };

  sortedByPopularity = () => {
    this.setState({
      contactsToDisplay: [...this.state.contactsToDisplay].sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      }),
    });
  };

  deleteContact = (id) => {
    this.setState({
      contactsToDisplay: this.state.contactsToDisplay.filter(
        (p) => p.id !== id
      ),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IRON CONTACTS</h1>
        <button onClick={this.addContact}>Add Random Contact</button>
        <button onClick={this.sortedByName}>Sort By Name</button>
        <button onClick={this.sortedByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsToDisplay.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={() => this.deleteContact(contact.id)}>
                      Delete me
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
