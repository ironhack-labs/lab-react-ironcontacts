import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Contacts from "./Contacts";

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5)
  };

  addRandomContact = () => {
    // here we find a random contact
    // and we add it to the state for contactsList
    const random = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(random);

    this.setState({
      contacts: [random, ...this.state.contacts]
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <Contacts contacts={this.state.contactsList} />
      </div>
    );
  }
}

export default App;
