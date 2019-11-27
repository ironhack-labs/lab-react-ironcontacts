import React, { Component } from "react";
import allContacts from "./contacts.json";
export default class Contact extends Component {
  state = { contacts: allContacts.splice(0, 5) };

  // Random
  handleClick = e => {
    const randomIndex = Math.floor(Math.random() * allContacts.length);
    const randomActor = allContacts[randomIndex];
    const contactsCopy = [...this.state.contacts];
    contactsCopy.push(randomActor);
    allContacts.splice(randomIndex, 1);
    this.setState({ contacts: contactsCopy });
    console.log(contactsCopy);
  };

  // Sort by Name
  handleClick2 = e => {
    const sortedName = [...this.state.contacts].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.setState({ contacts: sortedName });
  };

  //sort by popularity
  handleClick3 = e => {
    const sortedPopularity = [...this.state.contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    this.setState({ contacts: sortedPopularity });
  };

  //delete
  handleClick4 = i => {
    const updatedContacts = [...this.state.contacts];
    updatedContacts.splice(i, 1);
    console.log(updatedContacts);
    this.setState({ contacts: updatedContacts });
  };
  render() {
    return (
      <div className="grid">
        <button className="btn" onClick={this.handleClick}>
          Add Random Contact
        </button>
        <button className="btn" onClick={this.handleClick2}>
          Sort by Name
        </button>
        <button className="btn" onClick={this.handleClick3}>
          Sort by Popularity
        </button>
        <table className="table">
          <thead>
            <tr>
              <th className="img">Picture</th>
              <th className="name">Name</th>
              <th className="pop">Popularity</th>
              <th className="action">Action</th>
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
                <td>
                  <button onClick={() => this.handleClick4(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
function roundedTo(roundingValue, number) {
  return number.toFixed(roundingValue);
}
