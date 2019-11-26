import React, { Component } from "react";
import "./App.css";
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
    const randomActor = allContacts[randomIndex];
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(randomActor);
    allContacts.splice(randomIndex, 1);
    this.setState({ contacts: contactsCopy });
  };
  sortByName = e => {
    const contactsCopyAlpha = [...this.state.contacts];
    contactsCopyAlpha.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: contactsCopyAlpha });
    console.log(contactsCopyAlpha);
  };
  sortByPopularity = e => {
    const contactsCopyPopu = [...this.state.contacts];
    contactsCopyPopu.sort(function(a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    this.setState({ contacts: contactsCopyPopu });
    console.log(contactsCopyPopu);
  };

  deleteButton = index => {
    const contactDelete = [...this.state.contacts];
    contactDelete.splice(index, 1);
    this.setState({ contacts: contactDelete });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Add random contacts</button>
        <button onClick={this.sortByName}>Sort alphabeticaly</button>
        <button onClick={this.sortByPopularity}>Sort by popularity </button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((c, i) => (
              <tr key={i}>
                <td>
                  <img src={c.pictureUrl} alt={c.name} />
                </td>
                <td>{c.name}</td>
                <td>{roundedTo(2, c.popularity)}</td>
                <button onClick={() => this.deleteButton(i)}>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Contacts;
