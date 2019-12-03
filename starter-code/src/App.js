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
  
  render() {
    console.log('render');
    //console.log(this.state.contactsArr);
    return (
      <div className="App">
        <button onClick={this.generateRandomContact}>Generate Random Contact</button>
        <ContactsTable contactsArr={this.state.contactsArr} />
      </div>
    );
  }
}

export default App;