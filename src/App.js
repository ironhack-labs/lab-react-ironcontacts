import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  state = {
    newContacts: contacts.slice(0, 5),
  };

  addNewContact = () => {
    const copy = [...contacts];
    console.log(copy);
    const randomContact = copy[Math.floor(Math.random() * contacts.length)];
    this.setState({
      newContacts: [...this.state.newContacts, randomContact],
    });
    console.log(randomContact);
  };

  sortByName = () => {
    this.setState({
      newContacts: this.state.newContacts.sort((c1, c2) => {
        return c1.name.localeCompare(c2.name);
      }),
    });
  };

  sortByPopularity = () => {
    this.setState({
      newContacts: this.state.newContacts.sort((c1, c2) => {
        if (c1.popularity < c2.popularity) {
          return 1;
        } else if (c1.popularity > c2.popularity) {
          return -1;
        }
      }),
    });
  };

  deleteContact = (i) => {
    console.log('deleted');
    this.setState({
      newContacts: this.state.newContacts.filter((contact, index) => {
        return index !== i;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <div className="button">
          <button onClick={() => this.addNewContact()}>
            Add random contact
          </button>
          <button onClick={() => this.sortByName()}>Sort by Name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by Popularity
          </button>
        </div>

        <div className="FirstFive">
          <table className="ContentTable">
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.newContacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="pics" />
                  </td>
                  <td>{contact.name} </td>
                  <td>{contact.popularity.toFixed(2)} </td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteContact(index);
                      }}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
