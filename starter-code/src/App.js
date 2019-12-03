import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable'

class App extends Component {
  state = {contactsArr : contacts.slice(0,5)}
  
  generateRandomContact = this.generateRandomContact.bind(this);
  generateRandomContact () {
    let randomNum = Math.floor(Math.random()*contacts.length-1);
    const contactsArrCopy = [...this.state.contactsArr];
    const newContact = {...contacts[randomNum]};
    newContact.deleteAction = () => this.deleteContact(newContact.id);
    
    if(!contactsArrCopy.find(contact => contact.name===newContact.name)) {
      contactsArrCopy.unshift(newContact);
      this.setState({contactsArr:contactsArrCopy});
    }else this.generateRandomContact();
  }
  deleteContact = this.deleteContact.bind(this);
  deleteContact (contactId) {
    const contactsArrCopy = [...this.state.contactsArr];
    console.log(contactId);
    const contactToDelete = contactsArrCopy.indexOf(contactsArrCopy.find(contact => contact.id === contactId));
    console.log(contactToDelete);
    contactsArrCopy.splice(contactToDelete,1);
    this.setState({contactsArr:contactsArrCopy});
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
  addDeleteFunction = () => {
    const contactsArrCopy = [...this.state.contactsArr];
    contactsArrCopy.forEach( contact => {
      contact.deleteAction = () => this.deleteContact(contact.id);
    })
    this.setState({contactsArr:contactsArrCopy});
  }
  componentDidMount(){
    this.addDeleteFunction();
  }
    
  render() {
    
    return (
      <div className="App">
        <button onClick={this.generateRandomContact} className="top-buttons">Generate Random Contact</button>
        <button onClick={this.sortByName} className="top-buttons">Sort by name</button>
        <button onClick={this.sortByPopularity} className="top-buttons">Sort by Popularity</button>
        <ContactsTable contactsArr={this.state.contactsArr} />
      </div>
    );
  }
}

export default App;