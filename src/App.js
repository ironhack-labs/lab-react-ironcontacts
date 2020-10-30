import React from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts,
    displayedContacts: [0, 1, 2, 3, 4],
    randomIdx: Math.floor(Math.random() * contacts.length),
  };

  displayContacts() {
    const firstContacts = [];
    for (let i = 0; i < 5; i += 1) {
      firstContacts.push(this.state.contacts[i]);
    }
    return firstContacts.map((contact) => {
      return (
        <tr key={contact.id}>
          <td>
            <img src={contact.pictureUrl} alt="contact"/>
          </td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
        </tr>
      );
    });
  }

  addRandomContact = () => {
    /* while (this.state.displayedContacts.includes(this.state.randomIdx)) { this.setState({randomIdx: Math.floor(Math.random() * this.state.contacts.length)}) } */
    /* const contact = this.state.contacts[this.state.randomIdx]; */
    const test = this.state;
    console.log(test);
  }

  render() {
    return (
      <div className="app">
      <h1>IronContacts</h1>
      <button onClick={this.addRandomContact}>Add Random Contact</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{this.displayContacts()}</tbody>
      </table>
      </div>
    );
  }
}

export default App;
