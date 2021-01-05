import React from 'react';
import contacts from './contacts.json';
import './App.css';

class App extends React.Component {
  state = {
    contacts: [...contacts.slice(0, 5)],
  };

  addRandomContact = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contacts: [...this.state.contacts, randomContact],
    });
  };

  sortByName = () => {
    this.setState({
      contacts: [
        ...this.state.contacts.sort(function (a, b) {
          var nameA = a.name.toUpperCase();
          var nameB = b.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      ],
    });
  };

  sortByPopularity = () => {
    this.setState({
      contacts: [
        ...this.state.contacts.sort((a, b) => a.popularity - b.popularity),
      ],
    });
  };

  removeContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts.filter((c) => c.id !== contact.id)],
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button
          onClick={() => this.addRandomContact(contacts)}
          key={contacts.id}
        >
          Add Random Contact
        </button>
        <button onClick={() => this.sortByName(contacts)}>Sort by name</button>
        <button onClick={() => this.sortByPopularity(contacts)}>
          Sort by popularity
        </button>
        <table>
          <thead>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr>
                  <td>
                    <img src={contact.pictureUrl} alt="actor" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button onClick={(event) => this.removeContact(contact)}>
                      Delete
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
