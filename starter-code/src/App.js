import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable'

class App extends Component {
  state = {contactsArr : contacts.slice(0,5)}
  
  generateRandomContact = this.generateRandomContact.bind(this);
  generateRandomContact () {
    console.log('function called!');
    let randomNum = Math.floor(Math.random()*contacts.length-1);
    const contactsArrCopy = [...this.state.contactsArr];
    
    if(!contactsArrCopy.find(contact => contact.name===contacts[randomNum].name)) {
      contactsArrCopy.unshift(contacts[randomNum]);
      this.setState({contactsArr:contactsArrCopy});
    }else this.generateRandomContact();
  }
  deleteContact = this.deleteContact.bind(this);
  deleteContact (contactIndex) {
    const contactsArrCopy = [...this.state.contactsArr];
    console.log(contactIndex);
    contactsArrCopy.splice(contactIndex,1);
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
    contactsArrCopy.forEach( (contact, index) => {
      contact.deleteAction = () => this.deleteContact(index);
    })
    this.setState({contactsArr:contactsArrCopy});
  }
  componentDidMount(){
    this.addDeleteFunction();
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