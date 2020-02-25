import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import Contact from "./contact.js";

class App extends Component {
  state = { contacts };
  render() {
    return (
      <div className="contacts-grid">
        <h1>IronContacts</h1>
        <div className="oneContacts">
          {this.state.contacts.map(contact => (
            <Contact
              picture={contact.pictureUrl}
              name={contact.name}
              popularity={contact.popularity}
            ></Contact>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
