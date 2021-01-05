import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: contacts.slice(0, 5),
  };

  addContactRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    this.setState({
      contacts: [...this.state.contacts, randomContact],
    });
  };

  sortByName = () => {
    this.setState({
      contacts: [
        ...this.state.contacts.sort(function (a, b) {
          let nameA = a.name.toUpperCase();
          let nameB = b.name.toUpperCase();
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
          onClick={() => this.addContactRandom(contacts)}
          key={contacts.id}
        >
          Add Random Contact
        </button>
        <button onClick={() => this.sortByName(contacts)} key={contacts.id}>
          Sort by name
        </button>
        <button
          onClick={() => this.sortByPopularity(contacts)}
          key={contacts.id}
        >
          Sort by popularity
        </button>
        <table className="table">
          <thead>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>
                    <img src={contact.pictureUrl} alt=""></img>
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => this.removeContact(contact)}
                      key={contacts.id}
                    >
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
