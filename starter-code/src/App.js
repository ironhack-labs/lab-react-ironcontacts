import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { contacts, getRandomContacts } from './constants/contacts.js';
import HeaderContainer from './containers/HeaderContainer';
import TableContainer from './containers/TableContainer';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      contacts: getRandomContacts(),
      allContacts: contacts,
      sortByName: 'none',
      sortByPopularity: 'none',
    }
    this.deleteOne = this.deleteOne.bind(this);
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortContactsByName = this.sortContactsByName.bind(this);
    this.sortContactsByPopularity = this.sortContactsByPopularity.bind(this);
  }

  deleteOne (index) {
    const contactsArray = this.state.contacts.filter((e, i) => {
      return i !== index;
    })
    this.setState({ contacts: contactsArray });
  }

  addRandomContact () {
    const contactsArray = this.state.contacts;
    const random = Math.floor(Math.random() * this.state.allContacts.length);
    contactsArray.push(this.state.allContacts[random]);
    this.setState({ contacts: contactsArray });
  }

  sortContactsByName () {
    const contactsArray = this.state.contacts;

    if (this.state.sortByName === 'z-a') {
      this.state.contacts.sort( (a,b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 :0
      });
      this.setState({ contacts: contactsArray, sortByName: 'a-z' });
    } else if (this.state.sortByName === 'a-z') {
      this.state.contacts.sort( (a,b) => {
        return a.name > b.name ? -1 : a.name < b.name ? 1 :0
      });
      this.setState({ contacts: contactsArray, sortByName: 'z-a' });
    } else {
      this.state.contacts.sort( (a,b) => {
        return a.name < b.name ? -1 : a.name > b.name ? 1 :0
      });
      this.setState({ contacts: contactsArray, sortByName: 'a-z' });
    }
  }

  sortContactsByPopularity () {
    const contactsArray = this.state.contacts;

    if (this.state.sortByPopularity === 'z-a') {
      this.state.contacts.sort( (a,b) => {
        return a.popularity < b.popularity ? -1 : a.popularity > b.popularity ? 1 :0
      });
      this.setState({ contacts: contactsArray, sortByPopularity: 'a-z' });
    } else if (this.state.sortByPopularity === 'a-z') {
      this.state.contacts.sort( (a,b) => {
        return a.popularity > b.popularity ? -1 : a.popularity < b.popularity ? 1 :0
      });
      this.setState({ contacts: contactsArray, sortByPopularity: 'z-a' });
    } else {
      this.state.contacts.sort( (a,b) => {
        return a.popularity < b.popularity ? -1 : a.popularity > b.popularity ? 1 :0
      });
      this.setState({ contacts: contactsArray, sortByPopularity: 'a-z' });
    }
  }

  render() {
    return (
      <React.Fragment>
        <HeaderContainer random={this.addRandomContact} sortByName={this.sortContactsByName} sortByPopularity={this.sortContactsByPopularity}/>
        <TableContainer contacts={this.state.contacts} click={this.deleteOne}/>
      </React.Fragment>
    );
  }
}

export default App;