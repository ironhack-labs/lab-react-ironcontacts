import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

const contactsToDisplay = contacts.slice(0, 5);

export default class App extends Component {

  state = {contactsToDisplay};
  addRandomContact = () => {
    const newContact = contacts[Math.round(Math.random() * contacts.length)];
    this.setState({
      contactsToDisplay: [...this.state.contactsToDisplay, newContact]
    });    
  }
  
  render() {
  return (
    <div className="App">
    <h1>Iron Contacts</h1>
    <button onClick={() => this.addRandomContact()}>
    Add random contact
    </button>    
    
    <div className="divTable">
    <div className="divTableRow tableHeader">
      <div className="divTableCell">Picture</div>      
      <div className="divTableCell">Name</div>
      <div className="divTableCell">Popularity</div>
      </div>
    {this.state.contactsToDisplay.map((contact, index) => {
      return (
      <div className="divTableRow" key={index}>
      <div className="divTableCell"><img src={contact.pictureUrl} style={{width:'100px'}} alt=''/></div>      
      <div className="divTableCell">{contact.name}</div>
      <div className="divTableCell">{contact.popularity.toFixed(2)}</div>
      </div>
      )}
    )}
    </div>
    </div>
  );
}

}

