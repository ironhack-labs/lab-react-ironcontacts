import React, { Component } from 'react';
import './App.css';
import { contacts } from './contacts'
import Contact from './Contact';


class App extends Component {
  constructor() {
    super();
    this.state = {

      contacts: contacts.slice(0, 5)
    };

  }

  addRandom() {
    let clonedContacts = [...this.state.contacts]
    let filteredArray = [...contacts].filter(e => !clonedContacts.includes(e))
    let newRandom = filteredArray[Math.floor(Math.random() * filteredArray.length)]
    clonedContacts.push(newRandom)
    this.setState({
      ...this.state,
      contacts: clonedContacts
    });
  }

  sortName() {
    let clonedContacts = [...this.state.contacts]
    let order = clonedContacts.sort(
      function compare(a, b) {
        if (a.name > b.name) {
          return 1;
        }
        return -1
      })
    this.setState({
      ...this.state,
      contacts: order
    });
  }

  sortPopu() {
    let clonedContacts = [...this.state.contacts]
    let order = clonedContacts.sort(
      function compare(a, b) {
        if (a.popularity > b.popularity) {
          return -1;
        }
        return 1
      })
    this.setState({
      ...this.state,
      contacts: order
    });
  }

  deleteThis(contact) {
    let clonedContacts = [...this.state.contacts]
    let index=clonedContacts.indexOf(contact)
    console.log(index)
    clonedContacts.splice(index,1)

    this.setState({
      ...this.state,
      contacts: clonedContacts
    });
  }


  render() {
    return (

      <div>
        <nav>
          <button onClick={() => this.addRandom()}>Add Random Contact</button>
          <button onClick={() => this.sortName()}>Sort by Name</button>
          <button onClick={() => this.sortPopu()}>Sort by Popularity</button>
        </nav>
        {this.state.contacts.map((contact, idx) => (
          <Contact
            key={idx}
            {...contact}
            delete={() => this.deleteThis(contact)}
          />
        ))}
      </div>

    )
  }
}



export default App;
