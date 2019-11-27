import React, { Component } from "react";
import "./App.css";
import "./index.css";
import RandomContact from "./RandomContact";
import contacts from "./contacts.json";

// console.log(contacts.length - 1);
class App extends Component {
  state = {
    contacts: contacts.slice(0, 5)
  };
  // Add Random Contact
  addRandomContact = () => {
    console.log("clicked");
    let random = Math.floor(Math.random() * (contacts.length - 1 - 5)) + 5;
    this.setState({
      contacts: [...this.state.contacts, contacts[random]]
    });
    contacts.splice(random, 1);
    console.log(contacts);
  };
  // Sort Contact By Name
  sortByName = () => {
    console.log("CLICKEEEEEEEEED");
    let sort = contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      contacts: sort
    });
    console.log(sort);
  };
  // Sort Contact By Popularity
  sortByPopularity = () => {
    console.log("POP IS CLICKEEEEEED");
    let sort = contacts.sort((a, b) => (a.popularity < b.popularity ? 1 : -1));
    this.setState({
      contacts: sort
    });
  };

  deleteContact = index => {
    console.log("here is the btn delete on click");
    const copyContacts = [...this.state.contacts];
    copyContacts.splice(index, 1);
    this.setState({
      contacts: copyContacts
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className="btn-container">
          <RandomContact clbk={this.addRandomContact} />
          <button
            onClick={this.sortByName}
            type="button"
            className="btn btn-outline-dark"
          >
            Sort By Name
          </button>
          <button
            onClick={this.sortByPopularity}
            type="button"
            className="btn btn-outline-dark"
          >
            Sort By Popularity
          </button>
        </div>
        <div className="table">
          <table className="contact-table">
            <thead className="thead-dark">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.contacts.map((c, i) => (
                <tr key={i}>
                  <td>
                    <img src={c.pictureUrl} alt="celebrity" />
                  </td>
                  <td>{c.name}</td>
                  <td>{c.popularity}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={() => this.deleteContact(i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
