import React, { Component, createRef } from 'react';
import './App.css';
import contactsJson from './contacts.json';
import { Contact } from './components/Contact.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortcontact: false,
      sortpopularity: false,
      contactsList:
        contactsJson.splice(0, 5)
    }
  }

  randomAdd = () => {
    let ramdomNumber = Math.round(Math.random() * (contactsJson.length - 0) + 0)
    let randomContact = contactsJson[ramdomNumber]
    let newArray = [...this.state.contactsList]
    newArray.push(randomContact)
    this.setState({ contactsList: newArray })
  }

  sortByName = () => {
    let contactNames = [...this.state.contactsList]
    let orderedNames = contactNames.sort((a, b) => this.state.sortcontact ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))
    this.setState({ contactsList: orderedNames, sortcontact: !this.state.sortcontact })

  }

  sortByPopularity = () => {
    let contactPopulariry = [...this.state.contactsList]
    let orderedPopularity = contactPopulariry.sort((a, b) => this.state.sortpopularity ? a.popularity - b.popularity : b.popularity - a.popularity)
    this.setState({ contactsList: orderedPopularity, sortpopularity: !this.state.sortpopularity })
  }

  deleteContact = (id) => {
    let deleteContacts = [...this.state.contactsList]
    let updatedContacts = deleteContacts.filter(contact => contact.id !== id)
    this.setState({ contactsList: updatedContacts })
  }

  render() {
    console.log('cont', this.state)
    return (
      <>
        <h1> IronContacts</h1>
        <hr />
        <div style={{ margin: '50px 300px 50px 300px' }}>
          <div className="buttons">
            <button className="button1" onClick={this.randomAdd}>Add Random Contact</button>
            <button className="button2" onClick={this.sortByName}>
              {this.state.sortcontact ? 'Sort by Name (Asc)' : 'Sort by Name (Desc)'}</button>
            <button className="button3" onClick={this.sortByPopularity}>
              {this.state.sortpopularity ? 'Sort by Popularity (Asc)' : 'Sort by Popularity (Desc)'}
            </button>
          </div>
          <header>
            <h2 >Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
            <h2>Action</h2>
          </header>
          <div>
            {this.state.contactsList.map(contact => <Contact key={contact.id} id={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity} onDelete={this.deleteContact} />)}
          </div>
        </div>
      </>
    );
  }
}

export default App;
