import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: contacts.slice(5), // has to start from 5, other wise you get same contacts when random is clicked
      contacts: contacts.slice(0, 5)
    };
  }

  // CreateContact
  createContact = () => {
    let movieTable = this.state.contacts.map((contact, i) => {
      return (
        <tr key={i}>
          {/* the key helps React to keep track of each elements in array*/}
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
    const randomIndex = Math.floor(
      Math.random() * this.state.allContacts.length
    );
    const randomContact = this.state.allContacts[randomIndex];
    const newAllContact = this.state.allContacts.filter(
      // filter randomContact out
      (v, i) => i !== randomIndex
    );
    const contactArray = this.state.contacts;
    contactArray.push(randomContact);
    console.log(randomIndex, randomContact);
    this.setState({
      contacts: contactArray,
      allContacts: newAllContact // update state of allContacts too
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
          <h1>Ironhack Contacts</h1>
          <div className="buttons">
            <button onClick={this.getRandomContact}>Get Random Contact</button>
            <button onClick={this.sortContactsByName}>Sort by name</button>
            <button onClick={this.sortContactsByPopularity}>
              Sort by popularity
            </button>
          </div>
          <div className="table">{this.createTable()}</div>
        </div>
      </>
    );
  }
}

export default App;
