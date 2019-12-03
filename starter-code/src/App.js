import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsList from './components/ContactsList';

const fiveContacts = contacts.slice(0,5);

class App extends Component {

  state = {
    contactsList: fiveContacts
  }

  // ITERATION 2
  addRandom = () => {
    // get current contactsList
    let newContactsList = this.state.contactsList;
    // select random position    
    let randPos = Math.round(Math.random()*(contacts.length-1));
    // select random contact
    let randContact = contacts[randPos];
    // update contacts array
    newContactsList.push(randContact);
    // set state
    this.setState({contactsList: newContactsList});
  }

  // ITERATION 3
  sortByName = () => {    
    // get current contactsList
    let newContactsList = this.state.contactsList;
    // sort and update
    newContactsList.sort((a, b) => a.name.localeCompare(b.name));
    console.log(newContactsList);
    
    // setState
    this.setState({contactsList: newContactsList});
  }

  sortByPopularity = () => {
    // get current contactsList
    let newContactsList = this.state.contactsList;
    // sort
    newContactsList.sort((a, b) => b.popularity - a.popularity);
    // setState
    this.setState({contactsList: newContactsList});
  }

  // ITERATION 4
  delete = (contactIndex) => {
    // get current contactsList
    let newContactsList = this.state.contactsList;
    // delete contact in contactIndex   
    newContactsList.splice(contactIndex,1);
    // set state
    this.setState({contactsList: newContactsList});
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="btn-container">
          <button className="btn-selector" onClick={this.addRandom}>Add Random Contact</button>
          <button className="btn-selector" onClick={this.sortByName}>Sort by name</button>
          <button className="btn-selector" onClick={this.sortByPopularity}>Sort by popularity</button>
        </div>
        <ContactsList contactsArr={this.state.contactsList} deleteContact={this.delete}/>
      </div>
    );
  }
}

export default App;