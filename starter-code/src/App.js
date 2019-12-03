import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contact from './components/Contact';

class App extends Component {
  constructor() {
    super()
    this.contacts = [...contacts]
    this.initialContacts = contacts.splice(0, 5)
    this.state = {
      initialContacts: [...this.initialContacts]
    }
  }

  randomContact() {
    return this.contacts[Math.floor(Math.random() * (this.contacts.length - 5)) + 5]
  }

  addNewContactClick = () => {
    let listOfContacts = [...this.state.initialContacts]
    listOfContacts.push(this.randomContact())
    this.setState({
      initialContacts: listOfContacts
    })
  };

  sortByNameClick = () => {
    let listOfContacts = [...this.state.initialContacts]
    listOfContacts.sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    this.setState({
      initialContacts: listOfContacts
    })
  }

  sortByPopularityClick = () => {
    let listOfContacts = [...this.state.initialContacts]
    listOfContacts.sort((a, b) => {
      if (a.popularity > b.popularity) return 1;
      if (a.popularity < b.popularity) return -1;
      return 0;
    })
    this.setState({
      initialContacts: listOfContacts
    })
  }

  removeClick = (contactIndex) => {
    let listOfContacts = [...this.state.initialContacts];
    listOfContacts.splice(contactIndex,1);
    this.setState({
      initialContacts: listOfContacts
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Contacts</h1>
        <button onClick={this.addNewContactClick}>Add Random Contact</button>
        <button onClick={this.sortByNameClick}>Sort by name</button>
        <button onClick={this.sortByPopularityClick}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.initialContacts.map((oneContact, idx) =>
              <Contact key={idx} pictureUrl={oneContact.pictureUrl} name={oneContact.name} popularity={oneContact.popularity} removeClick={() => this.removeClick(idx)}></Contact>)}
          </tbody>
        </table>
      </div>


    );
  }
}

export default App;
