import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Contact from "./Contact";
import contacts from "./data/contacts.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: contacts,
      displayedContacts: [],
      maxContact: 5
    };

    this._addRandomContact = this._addRandomContact.bind(this);
  }

  componentDidMount() {
    let initialContacts = this.state.contacts
      .slice(0, this.state.maxContact)
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

    this.setState({ displayedContacts: initialContacts });
  }

  render() {
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
          <tbody>{this.state.displayedContacts}</tbody>
        </table>
      </div>
    );
  }

  _addRandomContact() {
    var rand = contacts[Math.floor(Math.random() * contacts.length)];

    let tempContacts = [this.state.displayedContacts];
    tempContacts.push(
      <Contact
        img={rand.pictureUrl}
        name={rand.name}
        popularity={rand.popularity}
        key={this.state.displayedContacts.length}
      />
    );

    this.setState({ maxContact: this.state.maxContact + 1 });
    this.setState({ displayedContacts: tempContacts });
  }
}

export default App;
