import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

class App extends Component {
  
  state = { 
    contacts: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    const contactsCopy = [...this.state.contacts]
    const remainingContacts = contacts.slice(this.state.contacts.length, contacts.length);
    const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
    contactsCopy.push(randomContact);
    this.setState({
      contacts: contactsCopy
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {
            this.state.contacts.map(contact => {
                return (<tr key={contact.id}>
                  <td><img src={contact.pictureUrl} alt={contact.name}/></td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                </tr>)
            })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
