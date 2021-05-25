import React, { Component } from "react";
import contactsJSON from "../contacts.json";

import "../index.css";

class Contacts extends Component {
  state = {
    contact: contactsJSON.slice(0, 5),
  };

  addRandomContact = () => {
    console.log("cliiiiiiiicked");
    const random = Math.floor(contactsJSON.length * Math.random());
    const addRandom = contactsJSON[random];

    const copyAddContacts = [...this.state.contact];
    copyAddContacts.push(addRandom);
    this.setState({
      contact: copyAddContacts,
    });
  };

  sortName = () => {
    const copyNameContacts = [...this.state.contact];
    copyNameContacts.sort((a, b) => a.name.localeCompare(b.name));
    this.setState({
      contact: copyNameContacts,
    });
  };

  sortPopularity = () => {
    const copyPopularityContacts = [...this.state.contact];
    copyPopularityContacts.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity < b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    this.setState({
      contact: copyPopularityContacts,
    });
  };

  deleteContact = (id) => {
    console.log("cliiiiiiicked");
    const eraser = this.state.contact.filter(
      (oneContact) => oneContact.id !== id
    );
    this.setState({
      contact: eraser,
    });
  };

  render() {
    return (
      <div>
        <h1>Iron Contacts</h1>
        <button onClick={this.addRandomContact}>Add A Random Contact</button>
        <button onClick={this.sortName}>Sort by Name</button>
        <button onClick={this.sortPopularity}>Sort By Popularity</button>
        <div className="display">
          <table className="table">
            <thead>
              <tr>
                <td>Picture</td>
                <td>Name</td>
                <td>Popularity</td>
              </tr>
            </thead>
            {this.state.contact.map((oneContact, index) => {
              return (
                <tbody>
                  <tr>
                    <td>
                      <img
                        style={{ width: 60 }}
                        src={oneContact.pictureUrl}
                        alt={oneContact.name}
                      />
                    </td>
                    <td>{oneContact.name}</td>
                    <td>{oneContact.popularity.toFixed(2)}</td>
                    <button onClick={() => this.deleteContact(oneContact.id)}>
                      Delete
                    </button>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}
export default Contacts;
