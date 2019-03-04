import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import contacts from './contacts.json'

class App extends Component {
  
  showContacts = () => {
    let list = contacts.splice(0,5).map((contact,i) => {
      return ( 
      <tr key={i}> 
        <td><img src={contact.pictureUrl} alt={contact.name} height="100" width="auto" ></img> </td>
        <td> {contact.name} </td>
        <td> {contact.popularity.toFixed(2)} </td>
      </tr>
      
        )
    })
    return list;
  }

  addContact = () => {
    let randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    list.push(randomContact);
    return list;
    
    
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1 className="AppTitle">IronContacts</h1>
        </header>
        <button>Add Random Contact</button>
        <table>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {this.showContacts()} 
        </table>
          
      </div>
    )
  }
}

export default App;
