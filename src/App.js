import React from 'react';
import contacts from './contacts.json';
import ContactList from "./ContactList";
import SearchField from "./SearchField";
import './App.css';


class App extends React.Component {

  state = {
    contacts: contacts.slice(0,4),
    query: ""
  }

  addRandom = () => {
    const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    if (this.state.contacts.find(contact => contact.id === randomContact.id)) {
            if (this.state.contacts.length < contacts.length) {
        this.addRandom();
      }
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, randomContact]
    })
  }
  sortByName = () => {
    const sortedByName = this.state.contacts.sort((a, b)=> {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      contacts: sortedByName
    })
  }
  sortByPopularity = () => {
    const sortByPopularity = this.state.contacts.sort((a,b) => {
      return b.popularity - a.popularity;
    })
    this.setState({
      contacts: sortByPopularity
    })
  }
  delete = (id) => {
    const newContactList = this.state.contacts.filter(contact => {
      return contact.id !== id;
    })
    this.setState({
      contacts: newContactList
    })
 
  }

  setQuery = queryInput => {
    this.setState({
      query: queryInput
    })
  }

  render() {

    return (
      <div className='App'>
                      <h1>IronContacts</h1>
              <div>
              <button onClick={this.addRandom}>Add Random Contact</button>
              <button onClick={this.sortByName}>Sort by name</button>
              <button onClick={this.sortByPopularity}>Sort by popularity</button>
              <SearchField 
              setQuery={this.setQuery}
              query={this.state.query}
              />
              </div>
        <ContactList 
        contacts={this.state.contacts}
        delete={this.delete}
        query={this.state.query}/>
      </div>
    )
  }
}

export default App;
