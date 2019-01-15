import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import { Table } from './components/Table';
import { Contact } from './components/Contact';
import { Button } from './components/Button';

class App extends Component {

  constructor() {
    super();
    this.state = {
      contacts: [
        contacts[0],
        contacts[1],
        contacts[2],
        contacts[3],
        contacts[4]
      ]
    }
  }
  addContact() {
    const randomContact = contacts[ Math.floor( Math.random() * contacts.length )];
    this.state.contacts.push(randomContact)
    this.setState({contacts: this.state.contacts});
  }
  shortContacts(type) {
    this.state.contacts.sort((a,b) => (a[type] > b[type]) ? 1 : ((b[type] > a[type]) ? -1 : 0)); 
    this.setState({contacts: this.state.contacts});
  }
  removeContact(i) {
    this.state.contacts.splice(i,1);
    this.setState({contacts: this.state.contacts});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ironcontacts</h1>
        </header>
        <div className="App-intro">
          <Button text="Add Random Contact" className="is-primary" action={() => this.addContact()}/>
          <span className="buttons has-addons">
            <Button text="Short by name" action={() => this.shortContacts('name')}/>
            <Button text="Short by popularity" action={() => this.shortContacts('popularity')}/>
          </span>
          <div className="container">
            <Table headTitles="Picure, Name, Popularity, Action">
              {this.state.contacts.map((contact, i) => <Contact key={i} actionBtn={() => this.removeContact(i)}>{contact}</Contact>)}
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
