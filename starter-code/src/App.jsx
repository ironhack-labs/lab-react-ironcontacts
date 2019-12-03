import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
//import Contact from "./Contact.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactArray: contacts.slice(0, 5)
    };

    this.addRandomContact = this.addRandomContact.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPopularity = this.sortByPopularity.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }

  addRandomContact() {
    const randomContact = Math.floor(
      Math.random() * Math.floor(contacts.length)
    );
    const contactArray = [...this.state.contactArray, contacts[randomContact]];
    this.setState({
      contactArray
    });
  }

  sortByName() {
    const contactArray = [...this.state.contactArray].sort((a, b) => {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });
    this.setState({
      contactArray
    });
  }

  sortByPopularity() {
    const contactArray = [...this.state.contactArray].sort((a, b) => {
      if (a.popularity < b.popularity) {
        return -1;
      }
      if (a.popularity > b.popularity) {
        return 1;
      }
      return 0;
    });
    this.setState({
      contactArray
    });
  }

  deleteContact(contact) {
    const contactArray = [...this.state.contactArray];
    const indexOfRemovedContact = contactArray.indexOf(contact);
    if (indexOfRemovedContact > -1) {
      contactArray.splice(indexOfRemovedContact, 1);
    }

    this.setState({
      contactArray
    });
  }

  render() {
    const name = this.state.name;
    const pictureUrl = this.state.pictureUrl;
    const popularity = this.state.popularity;

    return (
      <div className="App">
        <h1 className="IronContacts">IronContacts</h1>
        <button onClick={this.addRandomContact}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
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
            {this.state.contactArray.map((contact, index) => {
              return (
                <tr key={index}>
                  <td className="profilePicture">
                    <img src={contact.pictureUrl} alt="profile picture" />
                  </td>
                  <td>{contact.name}</td>
                  <td>{contact.popularity}</td>
                  <td>
                    <button onClick={() => this.deleteContact(contact)}>
                      Delete
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
