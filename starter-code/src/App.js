import React, { Component } from "react";
//import logo from "./logo.svg";
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

  render() {
    const contactItems = this.state.contact.map((contact) => (
      <tr key={contact.id}>
        <td>
          <img src={contact.pictureUrl} alt="" />
        </td>
        <td>{contact.name}</td>
        <td>{contact.popularity}</td>
      </tr>
    ));

    return (
      <div className="contactList">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortName}>Sort by name</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>{contactItems}</tbody>
        </table>
      </div>
    );
  }
}

export default App;
