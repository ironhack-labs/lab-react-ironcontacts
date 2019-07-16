import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactsList from "./components/ContactsList";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: contacts };
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
