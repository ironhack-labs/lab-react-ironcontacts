import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: contacts,
      contacts: contacts.splice(0, 5)
    };
  }

  // Create Row
  createRow = () => {
    let movieTable = this.state.contacts.map((contact, i) => {
      return (
        <tr key={i}>
          <th>
            <img src={contact.pictureUrl} alt="{contact.name}" />
          </th>
          <th>{contact.name}</th>
          <th>{Math.round(contact.popularity * 100) / 100}</th>
        </tr>
      );
    });
    return movieTable;
  };

  // createTable
  createTable = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
        </thead>
        <tbody>{this.createRow()}</tbody>
      </table>
    );
  };

  // getRandomContact
  getRandomContact = () => {
    const getRandom = this.state.allContacts[
      Math.floor(Math.random() * this.state.allContacts.length)
    ];
    const contactArray = this.state.contacts;
    contactArray.push(getRandom);
    const newContact = Array.from(new Set(contactArray));
    this.setState({
      contacts: newContact
    });
  };

  //sortContactsByName
  sortContactsByName = () => {
    let sortedContactsByName = [...this.state.contacts].sort((a, b) =>
      a.name > b.name ? 1 : -1
    );
    this.setState({
      contacts: sortedContactsByName
    });
  };

  //sortContactsByPopularity
  sortContactsByPopularity = () => {
    let sortedContactsByPopularity = [...this.state.contacts].sort(
      (a, b) => a.popularity - b.popularity
    );
    this.setState({
      contacts: sortedContactsByPopularity
    });
  };

  render() {
    // console.log(this.state.contacts);
    return (
      <>
        <button onClick={this.getRandomContact}>Get Random Contact</button>
        <button onClick={this.sortContactsByName}>Sort by name</button>
        <button onClick={this.sortContactsByPopularity}>
          Sort by popularity
        </button>
        <h1>IronhackContacts</h1>
        {this.createTable()}
      </>
    );
  }
}

export default App;
