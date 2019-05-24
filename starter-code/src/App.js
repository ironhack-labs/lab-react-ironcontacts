import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contacts from './components/Contacts';
import ContactList from './components/ContactList'

class App extends Component {
  state = {
    contactos : contacts.slice(0,5),
    totalElem : contacts.length
  }
  addRandomContact = () => {
     this.setState({
     })
  }
  sortByName = () => {
    this.setState({
      contactos: [...this.state.contactos].sort((a,b)=> a.name.localeCompare(b.name))
    })
  }
  sortByPopularity = () => {
    this.setState({
      contactos: [...this.state.contactos].sort((a,b)=> a.popularity-b.popularity)
    })
  }
  delete = (i) => {
    this.setState({
      contactos: this.state.contactos.slice(0, i)
    })
  }
  render() {
    return (
      <div className="App"> 
      <h4>IronContacts</h4>

      <ContactList 
      contact={this.state.contactos}
      addRandomContact = {this.addRandomContact}
      sortByName={this.sortByName}
      sortByPopularity={this.sortByPopularity}
      />
      </div>
    );
  }
}

export default App;
