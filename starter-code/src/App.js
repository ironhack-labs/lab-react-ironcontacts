import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactList from './ContactsList'
import Header from './Header';

class App extends Component {
  state = {
    contacts: contacts,
    firstContacts: contacts.slice(0, 5)
  }

  onClickAddRandomContact = () => {
    const newContact = this.state.contacts.filter(c => !this.state.firstContacts.includes(c))

    const randomContact = newContact[Math.floor(Math.random() * newContact.length)]

    this.setState({ firstContacts: [...this.state.firstContacts, randomContact] })
  }

  onClickSortByName = () => {
    const sortByName =  this.state.firstContacts.sort((a,b) => a.name.localeCompare(b.name))

    this.setState({ firstContacts: sortByName })
  }

  onClickSortByPopularity = () => {
    const sortByPopularity =  this.state.firstContacts.sort((a,b) => b.popularity - a.popularity)

    this.setState({ firstContacts: sortByPopularity })
  }

  removeContact = (index) => {
    const deleteContact = this.state.firstContacts
    
    deleteContact.splice(index, 1)

    this.setState({ firstContacts: deleteContact})
  }

  render() { 
   
    return (
      <div className="App">
        <Header />
          <div>
              <button className="card-link btn btn-sm btn-primary" onClick={this.onClickAddRandomContact}>Add Random Contact</button>
              <button className="btn btn-secondary" onClick={this.onClickSortByName}>Sort By Name</button>
              <button className="btn btn-secondary" onClick={this.onClickSortByPopularity}>Sort By Popularity</button>    
             
          </div>        
          <main className="container">
            <div>
              <ContactList contacts={this.state.firstContacts} addRandomContact={this.addRandomContact} removeContact={this.removeContact} />
            </div>
          </main>
      </div>
    );
  }
}

export default App;
