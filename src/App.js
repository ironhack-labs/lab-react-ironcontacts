import React from 'react';
// import logo from './logo.svg';
import './App.css';
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
        <h1>IronContacts</h1>
        <button onClick={() => this.newRandomContact()}>
          Add Random Contact
        </button>
        <button onClick={() => this.sortByName()}>Sort by name</button>
        <button onClick={() => this.sortByPopularity()}>
          Sort by popularity
        </button>
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
    );
  }
}

export default App;
