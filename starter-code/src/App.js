import React, { Component } from "react";

// import contacts from "./contacts.json";

import ContactList from "./Components/contactList.js";
import "./App.css";

class App extends Component {
  render() {
    // const { contacts } = this.state;
    return (
      <div className="App">
        <div>
          <h1>Contact List</h1>

          <ContactList />
          {/* <th>{contactList}</th> */}
          {/* <p> {contacts.name}</p> */}
        </div>
      </div>
    );
  }
}

export default App;
