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
    let updatedContactsAdd = this.state.allContacts.push(randomContact);
    this.setState({ allContacts: updatedContactsAdd });
  };

  removeContact = () => {
    let updatedContactsRemove = this.state.allContacts.pop();
    this.setState({ allContacts: updatedContactsRemove });
  };

  sortByName = () => {
    this.setState({
      allContacts: this.state.allContacts.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      ),
    });
  };

  sortByPopularity = () => {
    this.setState({
      allContacts: this.state.allContacts.sort((a, b) =>
        a.popularity < b.popularity ? 1 : b.popularity < a.popularity ? -1 : 0
      ),
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
          <button onClick={this.removeContact}>Remove Contact</button>
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
                <tr key={contact.name} className="contacts2">
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
