import React, { Component } from "react";

import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactList: contacts.slice(0, 5)
    };
    //binding here
    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const length = contacts.length;
    let random = contacts[Math.floor(Math.random() * length)];
    const newList = [...this.state.contactList, random];
    this.setState({
      contactList: newList
    });
  }

  sortByName() {
    const newList = [...this.state.contactList];
    newList.sort(function(a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contactList: newList
    });
  }

  sortByPopularity() {
    const newList = [...this.state.contactList];
    newList.sort(function(a, b) {
      if (a.popularity > b.popularity) {
        return -1;
      }
      if (a.popularity < b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contactList: newList
    });
  }

  deleteContact(index) {
    const newList = [...this.state.contactList];
    newList.splice(index, 1)
    this.setState({
      contactList: newList
    });
  }

  render() {
    const contactList = this.state.contactList;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <br />
        <div className="buttons">
          <button className="btn btn-light" onClick={this.addRandomContact}>
            Add Random
          </button>
          <button className="btn btn-light" onClick={this.sortByName}>
            Sort by Name
          </button>
          <button className="btn btn-light" onClick={this.sortByPopularity}>
            Sort by popularity
          </button>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>Picture:</th>
              <th>Name:</th>
              <th>Popularity:</th>
              <th>Action</th>
            </tr>
            {contactList.map((value, index) => {
              return (
                <tr key={value.id}>
                  <td>
                    <img src={value.pictureUrl} alt="" />
                  </td>
                  <td>{value.name}</td>
                  <td>{value.popularity.toFixed(2)}</td>
                  <td>
                    <button
                      className="btn btn-light"
                      onClick={() => this.deleteContact(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
