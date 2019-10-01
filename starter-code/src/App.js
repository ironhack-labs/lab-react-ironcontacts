import React, { Component } from "react";
import allContacts from "./contacts.json";
import Contact from "./components/Contact";
import "./App.css";

class App extends Component {
  state = {
    contacts: allContacts.slice(0, 5)
  };

  addContact = () => {
    this.setState({
      contacts: [
        ...this.state.contacts,
        allContacts[this.state.contacts.length]
      ]
    });
  };

  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => (a.name < b.name ? -1 : 1))
    });
  };

  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) =>
        a.popularity < b.popularity ? 1 : -1
      )
    });
  };

  deleteContact = name => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.name !== name)
    });
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div>
          <h1>IronContacts</h1>
        </div>
        <div>
          <button onClick={() => this.addContact()}>Add Random Contact</button>
          <button onClick={() => this.sortByName()}>Sort by name</button>
          <button onClick={() => this.sortByPopularity()}>
            Sort by popularity
          </button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, i) => (
                <Contact
                  key={i}
                  contactInfo={contact}
                  deleteOne={this.deleteContact}
                />
              ))}
            </tbody>
          </table>

          {/* <table style="width:100%">
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
            </tr>
          </table>
           */}
        </div>
      </div>
    );
  }
}

export default App;
