import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable'

class App extends Component {
  state = {contactsArr : contacts.slice(0,5)}
  
  generateRandomContact = this.generateRandomContact.bind(this);
  generateRandomContact () {
    const randomNum = Math.floor(Math.random()*this.state.contactsArr.length);
    const contactsArrCopy = [...this.state.contactsArr];
    //if (contactsArrCopy.find(contacts[randomNum])) {
      contactsArrCopy.unshift(contacts[randomNum]);
      this.setState({contactsArr:contactsArrCopy});
    //}
  }

  sortByName = this.sortByName.bind(this);
  sortByName () {
    const contactsArrCopy = [...this.state.contactsArr];
    contactsArrCopy.sort((a,b) => a.name.localeCompare(b.name));
    this.setState({contactsArr:contactsArrCopy});
  }
  sortByPopularity = this.sortByPopularity.bind(this);
  sortByPopularity () {
    const contactsArrCopy = [...this.state.contactsArr];
    contactsArrCopy.sort((a,b) => b.popularity - a.popularity);
    this.setState({contactsArr:contactsArrCopy});
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.generateRandomContact}>Generate Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        <ContactsTable contactsArr={this.state.contactsArr} />
      </div>
    );
  }
}

export default App;