import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactList: contacts.slice(0, 5)
    };
  }

  addRandomContact() {
    let availableContacts = contacts.filter(
      (contact, idx) =>
        this.state.contactList.map(c => c.name).indexOf(contact.name) < 0
    );
    let randomIdx = Math.round(Math.random() * availableContacts.length);

    this.state.contactList.push(availableContacts[randomIdx]);

    this.setState({
      ...this.state,
      contactList: this.state.contactList
    });
  }

  sortBy(prop) {
    this.setState({
      ...this.state,
      contactList: this.state.contactList.sort((prev, curr) => {
        if (prop === "name") {
          return prev.name.localeCompare(curr.name);
        }
        if (prop === "popularity") {
          return curr.popularity - prev.popularity;
        }
      })
    });
  }

  deleteContact(index) {
    this.setState({
      ...this.state,
      contactList: this.state.contactList.filter((el, idx) => idx !== index)
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="controls">
          <button className="add-btn" onClick={() => this.addRandomContact()}>
            <i className="fas fa-plus-circle" /> Add Random Contact
          </button>
          <button onClick={() => this.sortBy("name")}>Sort by name</button>
          <button onClick={() => this.sortBy("popularity")}>
            Sort by popularity
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contactList.map((contact, idx) => {
              return (
                <tr className="actor-card" key={idx}>
                  <td>
                    <img src={contact.pictureUrl} />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(idx)}>
                      Delete <i className="far fa-times-circle" />
                    </button>
                  </td>
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
