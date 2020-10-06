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

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={() => this.addNewContact()}>Add random contact</button>
        <div className="FirstFive">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {this.state.newContacts.map((contact) => (
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="pics" />
                  </td>
                  <td>{contact.name} </td>
                  <td>{contact.popularity.toFixed(2)} </td>
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
