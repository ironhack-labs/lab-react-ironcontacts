import React, { Component } from 'react';
import contacts from './contacts.json';
import Contacts from './components/Contacts';
import Table from './components/Table';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myContacts: contacts.slice(0, 4),
    }
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const randomContact = () => {
      let i = Math.ceil(Math.random()*contacts.length);
      return contacts[i];
    }
    const contactsArrCopy = [...this.state.myContacts]
    contactsArrCopy.unshift(randomContact());
    this.setState({
      myContacts: contactsArrCopy
    })
  }

  sortByName() {
    const contactsArrSorted = [...this.state.myContacts].sort((a, b) => a.name > b.name ? 1 : -1)
    this.setState({
      myContacts: contactsArrSorted
    })
  }

  sortByPopularity() {
    const contactsArrSorted = [...this.state.myContacts].sort((a, b) => a.popularity > b.popularity ? -1 : 1);
    this.setState({
      myContacts: contactsArrSorted
    })
  }

  deleteContact(contact) {
    const contactsArrFiltered = [...this.state.myContacts].filter(elem => elem.id !== contact.id)
    this.setState({
      myContacts: contactsArrFiltered
    })
  }


  render() {
    return (
      <div className="App">
        <p className="header">IronContacts</p>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button><br/>
        <Table contactsArr={this.state.myContacts} AppFunction={this.deleteContact}/>
      </div>
    );
  }
}
export default App;
