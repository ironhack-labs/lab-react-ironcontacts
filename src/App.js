import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
  return (
    <div className="App">
      <Table />
    </div>
  );
}

class Table extends Component {
  state = {
    allContacts: contacts.slice(0, 5),
  };

  addContact = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    const updatedContactsAdd = [...this.state.allContacts, randomContact];

    this.setState({ allContacts: updatedContactsAdd });
  };

  removeContact = (name) => {
    const copyOfContacts = [...this.state.allContacts];

    const theActorIndex = copyOfContacts.findIndex(
      (actor) => actor.name === name
    );

    copyOfContacts.splice(theActorIndex, 1);

    this.setState({ allContacts: copyOfContacts });
  };

  sortByName = () => {
    const copyOfContacts = [...this.state.allContacts];

    const sortedByName = copyOfContacts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    this.setState({
      allContacts: sortedByName,
    });
  };

  sortByPopularity = () => {
    const copyOfContacts = [...this.state.allContacts];

    const sortedByPop = copyOfContacts.sort((a, b) =>
      a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
    );

    this.setState({
      allContacts: sortedByPop,
    });
  };

  render() {
    return (
      <div className="contacts">
        <div>
          <h1>IronContacts</h1>
          <button onClick={this.addContact}>Add Random contact</button>
          <button onClick={this.sortByName}>Sort By Name</button>
          <button onClick={this.sortByPopularity}>Sort By Popularity</button>
          {/* <button onClick={this.removeContact}>Remove Contact</button> */}
        </div>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allContacts.map((contact) => {
              return (
                <tr
                  key={contact.name}
                  onClick={() => this.removeContact(contact.name)}
                  className="contacts2"
                >
                  <td>
                    <img className="profPic" src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
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
