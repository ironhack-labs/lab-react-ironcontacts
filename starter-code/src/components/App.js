import React, { Component } from "react";
import "./App.css";
import Row from "./row/Row";
import contacts from "../contacts.json";

class App extends Component {
  constructor() {
    super();
    this.copyContacts = [...contacts];
    this.initialContacts = this.copyContacts.splice(0, 5);
    this.state = { contacts: this.initialContacts };
  }
  addRandom = () => {
    const filteredContacts = this.copyContacts.filter((elm) => !this.initialContacts.includes(elm));
    let randomContact = filteredContacts[Math.floor(Math.random() * (filteredContacts.length - 1))];
    this.initialContacts.push(randomContact);
    this.setState({ contacts: this.initialContacts });
  };
  removeContact = (idx) => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(idx, 1);
    this.setState({ contacts: contactsCopy });
  };

  sortByName = () => {
    this.initialContacts.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: this.initialContacts });
  };

  sortByPopularity = () => {
    this.initialContacts.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      }
      if (a.popularity < b.popularity) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: this.initialContacts });
  };

  render() {
    return (
      <>
        <header className="header">
          <h1>Celebritieeees</h1>
        </header>
        <main className="content">
          <div className="controls">
            <button onClick={this.addRandom}>Add random contact</button>
            <button onClick={this.sortByName}>Sort by Name</button>
            <button onClick={this.sortByPopularity}>Sort by Popularity</button>
          </div>
          <table>
            <thead className="thead">
              <tr>
                <td>
                  <h3>Picture</h3>
                </td>
                <td>
                  <h3>Name</h3>
                </td>
                <td>
                  <h3>Popularity</h3>
                </td>
                <td>
                  <h3>Action</h3>
                </td>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((elm, idx) => (
                <Row {...elm} key={elm.id} removeContact={() => this.removeContact(idx)} />
              ))}
            </tbody>
          </table>
        </main>
      </>
    );
  }
}

export default App;
