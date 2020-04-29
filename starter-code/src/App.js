import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import Contact from './Contact.js'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fiveContacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
    }
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }

  addRandomContact() {
    let contactsArr = [...this.state.fiveContacts];
    let randomIdx = Math.floor(Math.random() * contacts.length)
    if(contactsArr.includes(contacts[randomIdx])) {
      this.addRandomContact()
    } else {
      // contactsArr.push(contacts[randomIdx])
      this.setState({
        fiveContacts: [
          contacts[randomIdx],
          ...contactsArr
        ]
      })
    }
  }

  sortByName() {
    let contactsArr = [...this.state.fiveContacts];
    contactsArr = contactsArr.sort((a, b) => 
      a.name.localeCompare(b.name)
    )
    this.setState({
      fiveContacts: contactsArr
    })
  }

  sortByPopularity() {
    let contactsArr = [...this.state.fiveContacts];
    contactsArr = contactsArr.sort((a, b) => 
      b.popularity - a.popularity
    )
    this.setState({
      fiveContacts: contactsArr
    })
  }

  removeContact(id) {
    let contactsArr = [...this.state.fiveContacts];
    contactsArr = contactsArr.filter(item => item.id != id);
    this.setState({
      fiveContacts: contactsArr
    })
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className='btn-container'>
          <button onClick={this.addRandomContact}>Add Random Contact</button>
          <button onClick={this.sortByName}>Sort by Name</button>
          <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
        <table>
          <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Action</th>
          </tr>
            {this.state.fiveContacts.map((item, idx) => 
              <Contact key={idx} removeContact={this.removeContact} {...item}/>
            )}
        </table>
      </div>
    );
  }
}

export default App;

