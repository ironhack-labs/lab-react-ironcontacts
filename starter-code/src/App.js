import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5),
    contacts: contacts,
    filteredContacts: contacts
    // sortedOutContacts: contacts
  };

  iAddedContact = e => {
    let randomContact = this.state.contacts[
      Math.floor(Math.random() * this.state.contacts.length + 1)
    ];
    let contactsList = this.state.contactsList;

    let contactsListCopy = [...this.state.contactsList];

    if (contactsList.includes(randomContact)) {
      this.iAddedContact();
      console.log("pappppiiiiiii");
    } else {
      contactsListCopy.push(randomContact);
      this.setState({
        contactsList: contactsListCopy
      });
    }
  };

  iSortedContacts = e => {
    let sortedContacts = this.state.contactsList;
    this.setState({
      contactsList: sortedContacts.sort((a, b) => {
        return a.name > b.name ? 1 : a.name < b.name ? -1 : 0;
      })
    });
  };

  iPopulatedContacts = e => {
    let sortedContacts = this.state.contactsList;
    this.setState({
      contactsList: sortedContacts.sort((a, b) => {
        return a.popularity > b.popularity
          ? 1
          : a.popularity < b.popularity
          ? -1
          : 0;
      })
    });
  };

  deletedContacts = i => {
    console.log();
    let contactCopy = [...this.state.contactsList];
    contactCopy.splice(i, 1);
    this.setState({
      contactsList: contactCopy
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <button className="first-btn" onClick={this.iAddedContact}>
          Add random Contact
        </button>
        <button className="second-btn" onClick={this.iSortedContacts}>
          Sort Contact
        </button>
        <button className="third-btn" onClick={this.iPopulatedContacts}>
          Popularity
        </button>

        <div class="table">
          {this.state.contactsList.map((contact, i) => {
            return (
              <tr key={i}>
                <td>
                  <img src={contact.pictureUrl} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity}</td>

                <button
                  className="fourth-btn"
                  onClick={() => this.deletedContacts(i)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
