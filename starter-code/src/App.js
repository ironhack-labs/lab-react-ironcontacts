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
  createRow = _ => {
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
  createTable = _ => {
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

  render() {
    console.log(this.state.contacts);
    return (
      <>
        <div>
          <h1>IronhackContacts</h1>
          {this.createTable()}
        </div>
      </>
    );
  }
}

export default App;
