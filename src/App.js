import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contacts: contacts.slice(0, 5),
    allContacts: contacts.slice(5, contacts.length),
  };

  addRandom = () => {
    const allContactsCopy = [...this.state.allContacts]; // [ {b}, {c}, {d}]
    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = allContactsCopy.splice(randomIndex, 1);

    const newArray = [...this.state.contacts];
    newArray.push(randomContact[0]);
    this.setState({ contacts: newArray, allContacts: allContactsCopy });
  };

  sortByName = () => {
    const newArray = [...this.state.contacts];
    newArray.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: newArray });
  };

  sortByPopularity = () => {
    const newSortedArray = [...this.state.contacts];
    newSortedArray.sort(function (a, b) {
      return a.popularity - b.popularity;
    });
    this.setState({ contacts: newSortedArray });
  };

  deleteContact = (id) => {
    const contactsCopy = [...this.state.contacts];
    const contactIndex = contactsCopy.findIndex((item) => item.id === id);
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy,
    });
  };

  render() {
    return (
      <div>
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort By Name</button>
        <button onClick={this.sortByPopularity}>Sort By Popularity</button>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.contacts.map((contact) => {
              return (
                <tr key={contact.id}>
                  <td>
                    <img
                      className="celebrity-pic"
                      src={contact.pictureUrl}
                    ></img>
                  </td>
                  <td>Name: {contact.name}</td>
                  <td>Popularity: {contact.popularity}</td>
                  <td>
                    <button onClick={this.deleteContact}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
