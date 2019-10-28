import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contactsJson from "./contacts.json";
import "./styles/button.scss";

import Row from "./components/Row";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsJson.slice(0, 4) };
  }
  compareNames = (a, b) => {
    return a.name.localeCompare(b.name);
  };
  comparePopularity = (a, b) => {
    return b.popularity.localeCompare(a.popularity);
  };

  addPerson = () => {
    const number = Math.floor(Math.random() * contactsJson.length);
    const item = contactsJson[number];
    const contacts = [...this.state.contacts];
    contacts.push(item);
    this.setState({ contacts });
  };

  sortByName = () => {
    const contacts = [...this.state.contacts];
    let sortedArray = contacts.sort(this.compareNames);
    this.setState({ contacts: sortedArray });
  };

  sortByPopularity = () => {
    const contacts = [...this.state.contacts];
    let sortedArray = contacts.sort((a, b) =>
      a.popularity < b.popularity ? 1 : -1
    );
    this.setState({ contacts: sortedArray });
  };

  deletePerson = index => {
    const contacts = [...this.state.contacts];
    contacts.splice(index, 1);
    this.setState({ contacts });
  };
  render() {
    return (
      <div className="App">
        <nav>
          <h2>IronContacts</h2>
        </nav>
        <div className="flex-container">
          <table cellpadding="20">
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Populararity</th>
            </tr>

            {this.state.contacts.map((person, i) => (
              <Row person={person} deletePerson={this.deletePerson} index={i} />
            ))}
          </table>
          <div>
            <button className="btn btn-primary" onClick={this.addPerson}>
              Add random Contact
            </button>
            <button className="btn btn-primary" onClick={this.sortByName}>
              Sort by Name
            </button>
            <button className="btn btn-primary" onClick={this.sortByPopularity}>
              Sort by Populararity
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
