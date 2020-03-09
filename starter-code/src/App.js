import React, { Component } from 'react';
import logo from './logo.svg';
import './style.scss';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/Contact';

class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addContact = this.addContact.bind(this);
    this.sortName = this.sortName.bind(this);
    this.sortPopularity = this.sortPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  calculateRandom(){
    const randContact = Math.floor(Math.random() * contacts.length);
    return contacts[randContact];
  }

  addContact(){
    let contact = this.calculateRandom(); 
    
    while(this.state.contacts.map((value) => value.id).includes(contact.id)){
      contact = this.calculateRandom();
    }

    this.setState(previousState => {
      return {
        contacts: [...previousState.contacts, contact]
      };
    });
  }

  deleteContact(id){
    this.setState(previousState => {
      const filtered = [...previousState.contacts].filter((contact) => (contact.id !== id));
      return {
        contacts: filtered
      };
    });
  }

  sortName(){
    this.setState(previousState => {
      const sorted = [...previousState.contacts].sort((a, b) => a.name.localeCompare(b.name));
      return {
        contacts: sorted
      };
    });
  }

  sortPopularity(){
    this.setState(previousState => {
      const sorted = [...previousState.contacts].sort((a, b) => b.popularity - a.popularity);
      return {
        contacts: sorted
      };
    });

  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div id="buttonDiv">
          <button onClick={this.addContact}>Add Random Contact</button>
          <button onClick={this.sortName}>Sort By Name</button>
          <button onClick={this.sortPopularity}>Sort By Popularity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
              {
                this.state.contacts.map(contact => (
                  <Contact onClick={() => this.deleteContact(contact.id)} key={contact.id} {...contact}/>
                ))
              }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
