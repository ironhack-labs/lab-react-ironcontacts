import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json'

class App extends Component {
  render() {
    const contactList =  contacts.map((contact, i) =>{
      return(
      <div className="contact-item" key={i}>
       <img src={contact.pictureUrl} alt=""/>
        <p>{contact.name}</p>
        <p>{contact.popularity}</p>
      </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>IronContacts</h1>
        <div className="contact-header">
          <p>Picture</p>
          <p>Name</p>
          <p>Popularity</p>
        </div>
        { contactList }
      </div>
    );
  }
}

export default App;
