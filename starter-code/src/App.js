import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ContactTable from "./components/ContactTable/ContactTable";
import contacts from "./contacts.json";
import FunctionButton from "./components/FunctionButton/FunctionButton";

class App extends Component {
  state = {
    contacts: contacts.slice(50,55)
  }

  addContact = () => {
    var randomContact = contacts[Math.floor(Math.random()*contacts.length)];
    let newContacts = [...this.state.contacts, randomContact]

    this.setState(
      {contacts:newContacts}
    )
  }

  sortContacts = () => {
    let newContacts = [...this.state.contacts]
    newContacts = newContacts.sort( (contact1, contact2) => {
      return contact2.popularity - contact1.popularity;
    });

    this.setState(
      {contacts:newContacts}
    )
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
       <div className="controller">
       <FunctionButton name="Add random contact" onClick={this.addContact}></FunctionButton>
       <FunctionButton name="Sort contacts" onClick={this.sortContacts}></FunctionButton>
       </div>
        <ContactTable contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
