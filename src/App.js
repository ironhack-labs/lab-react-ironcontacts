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
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={ this.addRandomContactHandler }>Add Random Contact</button>
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
               </tr>
             )
           })}
           </tbody>
         </table>
        
      </div>
    )
  }
}