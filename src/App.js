import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = { contacts: contacts.slice(0, 5) };

  newRandomContact = () => {
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const newContact = contacts[randomIndex];

    const copyOfContactsList = [...this.state.contacts];

    if (!copyOfContactsList.includes(newContact)) {
      copyOfContactsList.unshift(newContact);
    } else {
      return this.newRandomContact();
    }

    this.setState({ contacts: copyOfContactsList });
  };

  sortByName = (_names) => {
    const sortByname = [...this.state.contacts];
    sortByname.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({ contacts: sortByname });
  };

  sortByPopularity = (_popularity) => {
    const sortByPopularity = [...this.state.contacts];
    sortByPopularity.sort((a, b) => b.popularity - a.popularity);
    this.setState({ contacts: sortByPopularity });
  };

  deleteContact = (index) => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(index, 1);
    this.setState({ contacts: contactsCopy });
  };

  render() {
    return (
      <div className="App">
        <div class="title">
          <h1>IronContacts</h1>
        </div>
        <div class="buttons">
          <button
            class="button is-dark"
            onClick={() => this.newRandomContact()}
          >
            Add Random Contact
          </button>
          <button class="button is-dark" onClick={() => this.sortByName()}>
            Sort by name
          </button>
          <button
            class="button is-dark"
            onClick={() => this.sortByPopularity()}
          >
            Sort by popularity
          </button>
        </div>
        <div class="table">
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
              {this.state.contacts.map((contact) => {
                return (
                  <tr key={contact.id}>
                    <td>
                      <img src={contact.pictureUrl} alt={contact.name}></img>
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity.toFixed(2)}</td>
                    <td>
                      <button
                        class="button is-rounded button is-small button is-black"
                        onClick={() => {
                          this.deleteContact(contact.id);
                        }}
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
      </div>
    );
  }
}

export default App;
