import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./Contact";
import contacts from "./data/contacts.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts
    };
  }

  render() {
    let mappedContacts = this.state.contacts
      .slice(0, 5)
      .map((contact, index) => {
        return (
          <Contact
            img={contact.pictureUrl}
            name={contact.name}
            popularity={contact.popularity}
            key={index}
          />
        );
      });

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="contact-container" />
        <button onClick={this._addRandomContact}>Add Random Contact</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{mappedContacts}</tbody>
        </table>
      </div>
    );
  }

  _addRandomContact() {
    //
  }
}

export default App;
