import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactsInTable: contacts.slice(0, 5),
    contactOutsideOfTheTable: contacts.slice(5)
  };

  addRandomContact = () => {
    let updatedContactsInTable = [];
    let remainingContacts = this.state.contactOutsideOfTheTable;
    let randomContact = Math.floor(
      Math.random() * this.state.contactOutsideOfTheTable.length
    );
    updatedContactsInTable = this.state.contactsInTable;
    updatedContactsInTable.push(remainingContacts[randomContact]);
    remainingContacts.splice(randomContact, 1);
    this.setState({
      contactsInTable: updatedContactsInTable,
      contactOutsideOfTheTable: remainingContacts
    });
  };

  sortByPopularity = () => {
    let sortedContactsInTable = this.state.contactsInTable.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
    });
    this.setState({
      contactsInTable: sortedContactsInTable
    });
  };

  sortByName = () => {
    let sortedContactsInTable = this.state.contactsInTable.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
    });
    this.setState({
      contactsInTable: sortedContactsInTable
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Ironcontacts</h1>
        <button onClick={this.addRandomContact}>Add a random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <table className="Table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactsInTable.map(function(celebrity) {
              return (
                <tr key={celebrity.id}>
                  <td>
                    <img src={celebrity.pictureUrl} alt="" />
                  </td>
                  <td>{celebrity.name}</td>
                  <td>{celebrity.popularity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
