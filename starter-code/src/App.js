import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ContactList from './ContactList'
import data from './contacts.json'


class App extends Component {
  state = {
    contacts: data.slice(0,5)
  }

  addContacts = () => {

    let contactsCopy = [...this.state.contacts]
    contactsCopy.unshift(data[Math.floor(Math.random() * data.length)])
    this.setState({contacts:contactsCopy})

  }

  sortByName = () => {
    let contactsCopy = [...this.state.contacts]
    contactsCopy.sort((a,b) => (a.name > b.name) ? 1 : ((b.name> a.name) ? -1 : 0));
    this.setState({contacts:contactsCopy})
  }

  sortByPopularity = () => {
    let contactsCopy = [...this.state.contacts]
    contactsCopy.sort((a,b) => (a.popularity < b.popularity) ? 1 : ((b.popularity < a.popularity) ? -1 : 0));
    this.setState({contacts:contactsCopy})
  }

  deleteContact = (name) => {
    let contactsCopy = [...this.state.contacts]
    contactsCopy = contactsCopy.filter((el) => el.name !== name)
    this.setState({contacts:contactsCopy})
  }

  render() {

    return (

      <div className="App">

      <h1>IronContacts</h1>
      <button onClick={this.addContacts}
                >Add random contact</button>
      <button onClick={this.sortByName}
                >Sort by name</button>
                  <button onClick={this.sortByPopularity}
                >Sort by popularity</button>

      <ContactList deleteContact={this.deleteContact} contacts={this.state.contacts}/>

      </div>
    );
  }
}

export default App;
