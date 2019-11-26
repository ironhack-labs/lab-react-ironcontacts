import React, { Component } from "react";
import contacts from "./contacts.json";

export default class Contacts extends Component {
  state = {
    contacts: contacts.splice(0, 5),
    filteredContacts: contacts.splice(5, contacts.length)
  };

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  handleClickRandom = evt => {
    const randomIndex = this.getRandomInt(this.state.filteredContacts.length);
    const randomContact = this.state.filteredContacts[randomIndex];
    this.setState({
      contacts: [...this.state.contacts, randomContact],
      filteredContacts: [
        ...this.state.filteredContacts.filter((c, i) => i !== randomIndex)
      ]
    });
  };

  handleClickSortName = evt => {
    const sortedContacts = this.state.contacts.sort((a, b) => {
      return a.name < b.name ? -1 : 1;
    });
    this.setState({
      contacts: sortedContacts,
      filteredContacts: [...this.state.filteredContacts]
    });
  };

  handleClickSortPopularity = evt => {
    const sortedContacts = this.state.contacts.sort((a, b) => {
      return a.popularity > b.popularity ? -1 : 1;
    });
    this.setState({
      contacts: sortedContacts,
      filteredContacts: [...this.state.filteredContacts]
    });
  };

  render() {
    return (
      <tab>
        <button onClick={this.handleClickRandom} className="btn">
          Add Random Contacts
        </button>
        <button onClick={this.handleClickSortName} className="btn">
          Sort by name
        </button>
        <button onClick={this.handleClickSortPopularity} className="btn">
          Sort by popoularity
        </button>
        <tr className="tableHeader">
          <th>Name </th>
          <th>Picture </th>
          <th>Popularity </th>
          <th>Kill celebrity</th>
        </tr>
        {this.state.contacts.map((c, index) => (
          <tr key={index}>
            <td>{c.name}</td>
            <td>
              <img
                className="contactPicture"
                src={c.pictureUrl}
                alt={c.name}
              ></img>
            </td>
            <td>{c.popularity}</td>
            <td>
              <button
                className="btn"
                onClick={() => {
                  console.log(this.state.contacts[{ index }.index]);
                  console.log({ index }.index);
                  this.state.contacts.splice({ index }.index, 1);
                  this.setState({
                    contacts: [...this.state.contacts],
                    filteredContacts: [...this.state.filteredContacts]
                  });
                }}
              >
                Kill
              </button>
            </td>
          </tr>
        ))}
      </tab>
    );
  }
}
