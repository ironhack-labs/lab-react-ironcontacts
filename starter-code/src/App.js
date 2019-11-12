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
  createContact = () => {
    let movieTable = this.state.contacts.map((contact, i) => {
      return (
        <tr key={i}>
          <th>
            <img src={contact.pictureUrl} alt="{contact.name}" />
          </th>
          <th>{contact.name}</th>
          <th>{Math.round(contact.popularity * 100) / 100}</th>
          <th>
            <button onClick={this.deleteContact}>Delete</button>
          </th>
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
        <tbody>{this.createContact()}</tbody>
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
      (a, b) => b.popularity - a.popularity
    );
    this.setState({
      contacts: sortedContactsByPopularity
    });
  };

  // deleteContact
  deleteContact = i => {
    let copy = [...this.state.contacts];
    copy.splice(i, 1);
    this.setState({
      contacts: copy
    });
  };

  render() {
    // console.log(this.state.contacts);
    return (
      <>
      <div className="iron-contacts">
        <h1>IronhackContacts</h1>
        <div className="buttons">
          <button onClick={this.getRandomContact}>Get Random Contact</button>
          <button onClick={this.sortContactsByName}>Sort by name</button>
          <button onClick={this.sortContactsByPopularity}>
            Sort by popularity
          </button>
        </div>
        <div className="tabel">
          {this.createTable()}
          <hr />
        </div>
      </div>
      </>
    );
  }
}

export default App;
