import React, { Component } from "react";
import contacts from "./contacts.json";
import "./App.css";

const contactList = contacts.splice(0, 5);

class App extends Component {
  state = {
    contact: contactList,
  };

  addRandom = () => {
    let min = 0;
    let max = Math.floor(contacts.length);
    let randNum = Math.floor(Math.random() * (max - min + 1)) + min;

    let randContact = () => {
      //Logic needed to avoid duplicates..
      return contacts[randNum];
    };

    this.setState({
      contact: this.state.contact.concat(randContact()),
    });
  };

  sortName = () => {
    const sorted = this.state.contact.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    this.setState({
      contact: sorted,
    });
  };

  deleteContact = (id) => {
    const deleted = this.state.contact.filter((ele) => ele.id !== id);

    this.setState({
      contact: deleted,
    });
  };

  sortPopularity = () => {
    const sorted = this.state.contact.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
      return 0;
    });

    this.setState({
      contact: sorted,
    });
  };

  render() {
    const contactItems = this.state.contact.map((contact) => (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt="" />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
        <td>
          <button onClick={() => this.deleteContact(contact.id)}>Delete</button>
        </td>
      </tr>
    ));

    return (
      <div className="contactList">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <button onClick={this.sortPopularity}>Sort by popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{contactItems}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
