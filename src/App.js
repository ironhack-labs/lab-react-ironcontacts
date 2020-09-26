import React from 'react';
import ContactTable from './components/ContactTable';
import './App.css';

import allContacts from './contacts.json';

class App extends React.Component {
  state = {
    contacts: allContacts
  }

  addContact = () => {
    const contact = allContacts[Math.floor(Math.random() * allContacts.length)]
    this.setState( prev => ({
      contacts: [ contact, ...prev.contacts]
    }))
  }

  handleSortByName = () => {
    const contactsSortedByName = this.state.contacts.sort((a, b) => (a.name > b.name) ? 1 : -1)
    this.setState({ contacts : contactsSortedByName })
  }

  handleSortByPopularity = () => {
    const contactsSortedByPopularity = this.state.contacts.sort((a, b) => (a.popularity > b.popularity) ? -1 : 1)
    this.setState({ contacts : contactsSortedByPopularity })
  }

  deleteContact = (e) => {
    const filteredContacts = this.state.contacts.filter(c => c.id !== e.target.id)
    this.setState({ contacts: filteredContacts })
  }

  render() {
    return (
      <div className="App" style={{width: '70%', margin: 'auto', textAlign: 'center'}}>
        <header>
          <h1>IronContacts</h1>

          <button onClick={this.addContact} >Add Random Contact</button>
          <button onClick={this.handleSortByName} >Sort by name</button>
          <button onClick={this.handleSortByPopularity} >Sort by popularity</button>
        </header>

        <div>
          <ContactTable contacts={this.state.contacts} deleteContact={this.deleteContact}/>
        </div>

      </div>
    );
  }
}

export default App;
