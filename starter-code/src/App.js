import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import ContactsTable from './components/ContactsTable'

class App extends Component {

  state = {
    contactsArr:contacts,
    random: null
  }
  generateRandomContact = this.generateRandomContact.bind(this);
  
  generateRandomContact () {
    const randomNum = Math.floor(Math.random()*this.state.contactsArr.length);
    this.setState({random:randomNum});
    
    
}

  render() {
    return (
      <div className="App">
        <ContactsTable contactsArr={this.state.contactsArr} random={this.random}/>
        <button onClick={this.generateRandomContact}>Generate Random Contact</button>
      </div>
    );
  }
}

export default App;
