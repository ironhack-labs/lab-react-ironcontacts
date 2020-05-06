import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import "bootstrap/dist/css/bootstrap.min.css";

const contactsData = [...contacts];

class App extends Component {
  state = {
    contacts: contactsData.slice(0, 5),
  };

  addMovie = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.push(newContact);
    this.setState({
      contacts: this.state.contacts.concat(newContact),
    });
  };

  sortByName = () => {
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contacts: contactsCopy,
    });
  };
  sortByPopularity = () => {
    const contactsCopy = this.state.contacts.slice();
    contactsCopy.sort((a, b) => b.popularity - a.popularity);
    this.setState({
      contacts: contactsCopy,
    });
  };

  deleteContact = (id) => {
    const contactsCopy = this.state.contacts.filter((contact) => {
      if (contact.id === id) {
        return false; // delete the one that match
      } else {
        return true;
      }
    });
    this.setState({
      contacts: contactsCopy,
    });
  };

  render() {
    return (
      <div className="App">
        <h1 className="App-title "># IronContacts #</h1>
        <div className="nav container p-3 ">
          <button className="btn btn-success" onClick={this.addMovie}>
            Add Random contact
          </button>
          <button className="btn btn-info mx-2" onClick={this.sortByName}>
            Sort by name
          </button>
          <button className="btn btn-warning" onClick={this.sortByPopularity}>
            Sort by popularity
          </button>
        </div>
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">
                <p>Picture</p>
              </th>
              <th scope="col">
                <p>Name</p>
              </th>
              <th scope="col">
                <p>Popularity</p>
              </th>
              <th scope="col">
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => (
              <tr key={contact.id}>
                <th scope="row">
                  <img className="contactImg" src={contact.pictureUrl} alt="" />
                </th>
                <td>
                  <p>
                    <strong>{contact.name}</strong>
                  </p>
                </td>
                <td>
                  <p>{contact.popularity.toFixed(2)}</p>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.deleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
