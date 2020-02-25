import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contact from "./Contact";
import contacts from './contacts.json';



class App extends Component {
  constructor () {
    super();

    this.state = {
      contacts : contacts.slice(0,5),
      // order: true
    }
  }

  addContact(contactID) {
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    let randomNum = randomInt(0, contacts.length);
  
    this.contacts1 = this.state.contacts;
  
    this.contacts1.find(contact => contact.id === contactID)
    ? this.addContact()
    : this.contacts1.push([...contacts][randomNum]);

    this.setState({
      ...this.state,
      contacts: this.contacts1
    });
  }

  deleteContact(contactID) {
    this.contacts = this.state.contacts.filter(contact => contact.id !== contactID) 

    this.setState({
        ...this.state,
        contacts: this.contacts
      })
  }

  sortContact() {
    this.contacts1 = this.state.contacts
    this.contacts1.sort((a, b) => a.name.localeCompare(b.name));
  
    this.setState({
      ...this.state,
      contacts: this.contacts1,
      // order : !this.order
    });
  }

  sortContactPopularity() {
    this.contacts1 = this.state.contacts
    
    this.contacts1.sort((a, b) => {
      if (a.popularity > b.popularity) return -1;
      else return 1;
    });

    this.setState({
      ...this.state,
      contacts: this.contacts1
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>IRONCONTACTS</h1>
        <div class="btn">
          <button onClick={() => this.addContact()}>Add random contacts</button>
          <button onClick={() => this.sortContact()}>Sort by Name</button>
          <button onClick={() => this.sortContactPopularity()}>Sort by Popularity</button>
        </div>
        <table class="table">
          {/* <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead> */}
          <tbody class="body-table">
            {this.state.contacts.map(contact => (
            <Contact clickToDelete={() => this.deleteContact(contact.id)} key={contact.id} pictureUrl={contact.pictureUrl} popularity={contact.popularity} name={contact.name}></Contact>
            ))}
          </tbody>
        </table>


      </div>
    );
  }
}

export default App;
