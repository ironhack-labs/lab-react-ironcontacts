import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contactsJson from "./contacts.json";
import "./styles/button.scss";

import Line from "./components/Line";

class App extends Component {
  constructor() {
    super();
    this.state = { contacts: contactsJson.slice(0, 4) };
  }
  compareNames = (a, b) => {
    return a.name.localeCompare(b.name);
  };
  comparePopularity = (a, b) => {
    return a.popularity.localeCompare(b.popularity);
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
    let sortedArray = contacts.sort(this.comparePopularity);
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
          <table
            cellpadding="20"
            style={
              {
                // textAlign: "center"
              }
            }
          >
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Populararity</th>
            </tr>

            {this.state.contacts.map((person, i) => (
              <Line
                person={person}
                deletePerson={this.deletePerson}
                index={i}
              />
            ))}
          </table>
          <div>
            <button className="btn btn-primary" onClick={this.addPerson}>
              <p>Add random Contact</p>
            </button>
            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByName}>Sort by Populararity</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
