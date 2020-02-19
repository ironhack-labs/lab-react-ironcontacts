import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class Contacts extends Component {
  state = {
    display: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  };

  randomAdd = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];

    this.setState({
      display: [...this.state.display, randomContact]
    });
  };

  sortByName = () => {
    let alphabetical = this.state.display.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    this.setState({
      display: alphabetical
    });
  };

  sortPopular = () => {
    let popularity = this.state.display.sort(
      (a, b) => b.popularity - a.popularity
    );

    this.setState({
      display: popularity
    });
  };

  delete = e => {
    let contactIndex = e.target.value;

    this.state.display.splice(contactIndex, 1);

    this.setState({
      display: this.state.display
    });
  };

  render() {
    const data = this.state.display.map(contact => {
      return (
        <tr key={contact.id} className="contactProfile">
          <td>
            <img src={contact.pictureUrl} alt={contact.name} />
          </td>
          <td>
            <p>{contact.name}</p>
          </td>
          <td>
            <p>{contact.popularity.toFixed(2)}</p>
          </td>
          <td>
            <button
              onClick={this.delete}
              value={this.state.display.indexOf(contact)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div className="container">
        <h1>IronContacts</h1>
        <div className="buttons">
          <button onClick={this.randomAdd}>Add Random Contacts</button>
          <button onClick={this.sortByName}>Sort by name</button>
          <button onClick={this.sortPopular}>Sort by popularity</button>
        </div>
        <div className="contactTable">
          <table>
            <thead>
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Contacts />
      </div>
    );
  }
}

export default App;
