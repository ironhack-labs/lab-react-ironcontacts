import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";
import Contact from "./Contact.js";


class App extends Component {
  constructor(){
    super();
    this.state = {
      contacts: contacts,
      contactsToShow: contacts.splice(0,5),
      nameOrderAsc: true,
      popularityOrderAsc: true
    };
  }

  addRandomContact() {
    let newState = {
      ...this.state
    };
    const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
    
    for (let i = 0; i < this.state.contacts.length; i++){
      const contactToPush = this.state.contacts[randomInt(0,this.state.contacts.length)];
      if (this.state.contactsToShow.find(contact => contact.id === contactToPush.id)) continue;
      this.state.contactsToShow.push(contactToPush);
      break;
    }
      
    this.setState(newState);
  }

  deleteContact(contactID) {
    let newState = {...this.state}
    let filteredContacts = newState.contactsToShow.filter((contact) => contact.id !== contactID)

    newState.contactsToShow = filteredContacts

    this.setState(newState)
  }

  sortByName() {
    let newState = {
      ...this.state
    };
    if (newState.nameOrderAsc === true) newState.contactsToShow.sort((a, b) => a.name.localeCompare(b.name));
    else newState.contactsToShow.sort((a, b) => b.name.localeCompare(a.name));

    newState.nameOrderAsc = !this.state.nameOrderAsc
    
    this.setState(newState);
  }

  sortByPopularity() {
    let newState = {
      ...this.state
    };
    if(newState.popularityOrderAsc === true) newState.contactsToShow.sort((a, b) => a.popularity - b.popularity);
    else newState.contactsToShow.sort((a,b)=> b.popularity - a.popularity)

    newState.popularityOrderAsc = !this.state.popularityOrderAsc

    this.setState(newState);
  }

  render() {
    return (
      <section className="main">
        <nav>
          <h1>IronContacts</h1>
          <div className="buttonsContainer">
          <button onClick={() => this.addRandomContact()}>Add Random Contact</button>
          <button onClick={() => this.sortByName()}>Sort by Name</button>
          <button onClick={() => this.sortByPopularity()}>Sort by Popularity</button>
          </div>
        </nav>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.state.contactsToShow.map(contact => {
            return <Contact clickToDelete={() => this.deleteContact(contact.id)} key={contact.id} pictureUrl={contact.pictureUrl} name={contact.name} popularity={contact.popularity}></Contact>
          })
          }
          </tbody>
        </table>
      </section>
    );
  }
}

export default App;
