import React, { Component } from "react";
import allContacts from "./contacts.json";

function roundedTo(roundingValue, number) {
  return number.toFixed(roundingValue);
}

class Contacts extends Component {
  state = {
    contacts: allContacts.splice(0, 5)
  };

  handleClick = e => {
    const randomIndex = Math.floor(Math.random() * allContacts.length);
    const randomContact = allContacts[randomIndex];
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(randomContact);
    allContacts.splice(randomIndex, 1);
    this.setState({ contacts: contactsCopy });
  };

  sortByName = e => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: contactsCopy });
  };

  sortByPopularity = e => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.sort(function(a, b) {
      return b.popularity - a.popularity;
    });
    this.setState({ contacts: contactsCopy });
  };

  deleteActor = index => {
    const contactsCopy = [...this.state.contacts];
    contactsCopy.splice(index, 1);
    this.setState({ contacts: contactsCopy });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort Contact by Name</button>
        <button onClick={this.sortByPopularity}>
          Sort Contact by Popularity
        </button>

        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact, i) => (
              <tr key={i}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
                <td>{contact.name}</td>
                <td>{roundedTo(2, contact.popularity)}</td>
                <button onClick={() => this.deleteActor(i)}>
                  Remove Actor
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
