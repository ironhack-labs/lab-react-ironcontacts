import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

const contactsArr = [...contacts].slice(0, 5);

class App extends Component {
  state = {
    contacts: contactsArr,
  };

  add = () => {
    let newArr = [...this.state.contacts];
    newArr.push(
      contacts[Math.floor(Math.random() * Math.floor(contacts.length))]
    );
    this.setState({
      contacts: newArr,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.add}>Add Random Contact</button>
        <table className="Contacts">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <tr>
                <td>
                  <img className="pictureUrl" src={contact.pictureUrl} alt="" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
