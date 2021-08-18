import './App.css';
import Contact from "./Contact";
import contacts from './contacts.json';
import React, { Component } from 'react';

class App extends Component {

  state = {
    contactsArr: []
  }

  constructor() {
    super();

    let firstContacts = [];
    for(let count = 0; count < 5; count++) {
      firstContacts.push(contacts[count]);
    }
    this.state = {contactsArr: firstContacts};
    this.addRandomContract = this.addRandomContract.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
  }

      
  renderContacts() {
    if(this.state.contactsArr) {
      return this.state.contactsArr.map(contactObj => {
      return (
          <Contact 
              key={contactObj.id} 
              {...contactObj}
              contactObj={contactObj}
              state={this.state}
              parent={this}   
          />
      )});
    }
  }

  
  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  addRandomContract() {
    let contact = contacts[this.randomIntFromInterval(0, contacts.length)];
    if(contact != undefined) {
      let newContracts = this.state.contactsArr;
      newContracts.push(contact);      

      console.log(newContracts);
      this.setState({contactsArr: newContracts})
    }

    console.log(this.state.contactsArr);
    this.renderContacts();
  }

  sortByName() {
    let sortedContracts = this.state.contactsArr;
    sortedContracts.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      var nameB = b.name.toUpperCase(); // Groß-/Kleinschreibung ignorieren
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // Namen müssen gleich sein
      return 0;
    });
    this.setState({contactsArr: sortedContracts})
  }

  sortByPopularity() {
    let sortedContracts = this.state.contactsArr;
    sortedContracts.sort(function(a, b) {
      var nameA = a.popularity; // Groß-/Kleinschreibung ignorieren
      var nameB = b.popularity; // Groß-/Kleinschreibung ignorieren
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    
      // Namen müssen gleich sein
      return 0;
    });
    this.setState({contactsArr: sortedContracts})
  }

  render() {
    return (
      <div>
      <h1>Iron Contacts</h1>
      <button onClick={this.addRandomContract}>Add Random Contract</button>
      <button onClick={this.sortByName}>Sort by name</button>
      <button onClick={this.sortByPopularity}>Sort by popularity</button>
      <div className="header"><div className="column">Picture</div>   <div className="column">Name</div>   <div className="column">Popularity</div></div>
        {this.renderContacts()}
      </div>
    );
  }
}

export default App;
