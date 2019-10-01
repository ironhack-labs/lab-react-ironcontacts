import React, { Component } from 'react';
import './App.css';
import { ContactsList } from '../../utils/ContactsList';
import ContactDetails from '../ContactDetails/ContactDetails'


class App extends Component {
  constructor() {
    super()
      this.state = {
        contactsList: ContactsList.slice(0, 5),
        ascendingSort: false
      }
  }

  addRandom() {
    let availableContacts = ContactsList.filter(
      (contact, i) =>
        this.state.contactsList.map(c => c.name).indexOf(contact.name) < 0
    );

    let randomContact = availableContacts[randomInt(0, availableContacts.length)]
    let newContactsList = [...this.state.contactsList, randomContact]
    this.setState({ ...this.state, contactsList: newContactsList});
  }
    
  sortContacts(prop) {
    if (!this.state.ascendingSort) {
      this.setState({ 
        ...this.state,
        contactsList: this.state.contactsList
          .sort((a, b) => {
            if (prop === "name") {
              if (a.name > b.name) return 1;
              return -1;
          }
            if (prop === "popularity") {
            if (a.popularity > b.popularity) return -1;
            return 1;
          }
          return null
        }),
        ascendingSort: true
      })
    } else {
      this.setState({ 
        ...this.state,
        contactsList: this.state.contactsList
          .sort((a, b) => {
            if (prop === "name") {
              if (a.name > b.name) return -1;
              return 1;
          }
            if (prop === "popularity") {
            if (a.popularity > b.popularity) return 1;
            return -1;
          }
          return null
        }),
        ascendingSort: false
      })
    }
  }

  deleteContact(i) {
    this.state.contactsList
      .splice(i,1)

    console.log(this.state.contactsList)

    this.setState({
      ...this.state,
      contactsList: this.state.contactsList
    })
  }


  render() {
    return (
      <div className="container">
        <div className="item-container">
          <h1 className="title">IronContacts</h1>
          <div className="flex">
            <button onClick={() => this.addRandom()}>Add random contact</button>
            <button className="sort" onClick={() => this.sortContacts('name')}>Sort by Name</button>
            <button className="sort" onClick={() => this.sortContacts('popularity')}>Sort by Popularity</button>
          </div>
          <div className="top-row">
            <div className="col col-1"><h2>Picture</h2></div>
            <div className="col col-2"><h2>Name</h2></div>
            <div className="col col-3"><h2>Popularity</h2></div>
            <div className="col col-4"><h2>Delete</h2></div>
          </div>
          <div className="contacts">
            {this.state.contactsList
              .map((contact, i) => (
              <ContactDetails key={i}
              {...contact}
              button={<button className="red" onClick={() => this.deleteContact(i)}>Delete</button>}
              ></ContactDetails>))}
          </div>
        </div>
      </div>
    );
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default App;
