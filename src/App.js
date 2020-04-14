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

  sortContacts = (property) => () => {
    const contactsCopy = [...this.state.contacts]
    property === "popularity" ?
      contactsCopy.sort((a,b) => (a[property] > b[property]) ? -1 : ((b[property] > a[property]) ? 1 : 0))
    : 
      contactsCopy.sort((a,b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
    this.setState({
      contacts: contactsCopy
    });
  }

  removeContact = (id) => () => {
    const contactsCopy = this.state.contacts.filter(( contact ) => contact.id !== id);
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
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortContacts("name")}>Sort by name</button>
        <button onClick={this.sortContacts("popularity")}>Sort by popularity</button>
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
                  <td><button onClick={this.removeContact(contact.id)}>Delete</button></td>
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
