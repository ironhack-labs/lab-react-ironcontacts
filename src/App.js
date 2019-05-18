import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './data/contacts.json';
import ContactList from './components/ContactList';


class App extends Component {
  state = {
    arrayofContacts: contacts,
    contacts: contacts.splice(0, 5),
   // name: contacts.name
    }

  addRandomContact = () => {
    const numberContact = this.state.arrayofContacts.length;
    const num = Math.floor(Math.random() * numberContact);
    const newContact = this.state.arrayofContacts[num];
    const newCon = [...this.state.contacts, newContact]

    this.setState({contacts: newCon})
  }

  sortedContacts = () => {
     const sorted = this.state.contacts.sort( (a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      // a must be equal to b
      return 0;
     })
     this.setState({contacts: sorted})
  }

sortByPopularity = () => {
  const sortedbyPop = this.state.contacts.sort( (a, b) => {
    return b.popularity - a.popularity;
  })
  this.setState({contacts: sortedbyPop})
}

deleteContact = (index) => {
  this.state.contacts.splice(index, 1)
  this.setState({contacts: [...this.state.contacts]})
}
  render() {

    const { contacts } = this.state;

    return (

      <div className="App">

        <button onClick={this.addRandomContact}>Add New Contact</button>
        <button onClick={this.sortedContacts}>Sort Contacts</button>
        <button onClick={this.sortByPopularity}>Sort Popularity</button>
        {
          contacts.map( (contacts, index) => {
              return <ContactList contacts={contacts} key={index} delete={this.deleteContact} />
          })
        }
        
      </div>
    );
  }
}

export default App;
