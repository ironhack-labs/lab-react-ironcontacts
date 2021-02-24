import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

export default class App extends Component {

  state = {
    contacts: contacts.slice(0, 5)
  };

  addRandomContactHandler = () => {
    const filteredContacts = contacts.filter( contact => !(this.state.contacts).includes(contact));
    const newContact = filteredContacts[Math.floor(Math.random() * filteredContacts.length)];

    this.setState({
      contacts: [...this.state.contacts, newContact]
    });
  };

  sortByNameHandler = () => {
    const sortedContacts = this.state.contacts.sort((a, b) => a.name.localeCompare(b.name));

    this.setState({
      contacts: sortedContacts
    });
  };

  sortByPopularityHandler = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => b.popularity - a.popularity)
    })
  };

  deleteContactHandler = (contactId) => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId)
    })
  }
;
  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={ this.addRandomContactHandler }>Add Random Contact</button>
        <button onClick={ this.sortByNameHandler }>Sort by name</button>
        <button onClick={ this.sortByPopularityHandler }>Sort by popularity</button>
        <table>
           <thead>
             <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
             </tr>
           </thead>
           <tbody>
           { this.state.contacts.map(contact => {
             return (
               <tr key={ contact.id }>
                  <td><img src={ contact.pictureUrl } style={{ width: '50px'}} alt="pictures"/></td>
                  <td>{ contact.name }</td>
                  <td>{ (contact.popularity).toFixed(2) }</td>
                  <td><button onClick={ () => this.deleteContactHandler(contact.id)}>Delete</button></td>
               </tr>
             );
           })}
           </tbody>
         </table>
        
      </div>
    );
  };
};