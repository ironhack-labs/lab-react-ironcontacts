import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';

const contactsToDisplay = contacts.slice(0, 5);

export default class App extends Component {

  state = {contactsToDisplay, sortNameAsc: true, sortPopAsc: true};
  addRandomContact = () => {
    const newContact = contacts[Math.round(Math.random() * contacts.length)];
    this.setState({
      contactsToDisplay: [...this.state.contactsToDisplay, newContact]
    });    
  }

  sortByPopularity = () => {
    this.setState ((prevState) => {
      if (prevState.sortPopAsc) {
      prevState.contactsToDisplay.sort((a, b) => {
          return (a.popularity > b.popularity) ? -1 : (b.popularity > a.popularity) ? 1 : 0
          })}else{
          prevState.contactsToDisplay.sort((a, b) => {
            return (a.popularity < b.popularity) ? -1 : (b.popularity < a.popularity) ? 1 : 0    
              })
      }
      return {contactsToDisplay: prevState.contactsToDisplay, sortPopAsc: !prevState.sortPopAsc}
    });  
  }

  sortByName = () => {
    this.setState ((prevState) => {
      if (prevState.sortNameAsc) {
      prevState.contactsToDisplay.sort((a, b) => {
          return (a.name.toUpperCase() > b.name.toUpperCase()) ? -1 : (b.name.toUpperCase() > a.name.toUpperCase()) ? 1 : 0
        })}else{
        prevState.contactsToDisplay.sort((a, b) => {
            return (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : (b.name.toUpperCase() > a.name.toUpperCase()) ? -1 : 0      
            })
      }
      return {contactsToDisplay: prevState.contactsToDisplay, sortNameAsc: !prevState.sortNameAsc}
    });   
  }  
  
  render() {
  return (
    <div className="App">
    <h1>Iron Contacts</h1>

    <div className='buttons'>
      <button onClick={() => this.addRandomContact()}>
      Add random contact
      </button>
      <button onClick={() => this.sortByName()}>
    Sort by name
      </button>   
      <button onClick={() => this.sortByPopularity()}>
      Sort by popularity
      </button>  
    </div>             
    
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

