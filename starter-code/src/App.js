import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactsDisplayer from "./ContactsDisplayer";

class App extends Component {
  // constructor() {
  //   super();
  // }
  getRandomContacts(qty) {
    // Shuffle contacts

    const contactsShuffled = contacts.sort(() => 0.5 - Math.random());
    // return sub-array of first n elements after shuffled
    return contactsShuffled.slice(0, qty);
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}

        <button onClick={() => this.getRandomContacts(5)}>
          SELECT RANDOM CONTACTS
        </button>

        <ContactsDisplayer contactsSelected={this.getRandomContacts(5)} />
      </div>
    );
  }
}

export default App;
