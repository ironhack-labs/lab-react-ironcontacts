//import React from 'react';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {
  state = {
    contacts: contacts,
    randomContact: []
  };

  addContact = (min, max) => {
    const randomNum = Math.floor(Math.random() * max) + min  
    const randomContact = this.state.contacts[randomNum];
    
     this.setState({
        ...this.state,
        randomContact: [
          ...this.state.randomContact,
          randomContact
        ]
     }) 
  }
  
  render() {

    const firstFiveContacts = this.state.contacts.slice(0, 5);
    /* this.setState({
      ...this.state,
      fiveContacts: firstFiveContacts
    }) */
    console.log(this.state)
    const max = this.state.contacts.length - 1
    const min = 5
    console.log(max); 
    return (
      <div className="App">
        <div>
          <h3>IronContacts</h3>
          <button onClick={() => this.addContact(min, max)}>Add Random Contact</button>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {firstFiveContacts.map((contact) => (
                // return
                <tr key={contact.id}>
                  <td>
                    <img src={contact.pictureUrl} alt="" />
                  </td>
                  <td>{contact.name}</td>

                  <td>{contact.popularity}</td>
                </tr>
              ))}
              {this.state.randomContact.map(item => (
                item.name
              )
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

