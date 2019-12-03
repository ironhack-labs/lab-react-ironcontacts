import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: contacts.slice(0, 5)
    };
    this.addName = this.addName.bind(this);
    this.sortByName = this.sortByName.bind(this);
    this.sortByPop = this.sortByPop.bind(this);
    this.delete = this.delete.bind(this);
  }

  addName() {
    const random = contacts[Math.floor(Math.random() * contacts.length) + 4];
    console.log(random);
    const contactsnew = this.state.contacts.push(random);
    this.setState({
      contactsnew
    });
  }

  sortByName() {
    // console.log("Im trying to sort");
    const contactsort = this.state.contacts.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
    });
    console.log(contactsort);
    this.setState({
      contactsort
    });
  }

  sortByPop() {
    // console.log("Im trying to sort");
    const contactsort = this.state.contacts.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      }
      if (a.popularity > b.popularity) {
        return -1;
      }
    });
    console.log(contactsort);
    this.setState({
      contactsort
    });
  }

  delete(i) {
    console.log(i);
    const contactsnew = [...this.state.contacts.splice(i,1)]
    this.setState({
      contactsnew
    });
  }

  render() {
    const contacts = this.state.contacts;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <div className = "button">
        <button onClick={this.addName}>add random celeb</button>
        <button onClick={this.sortByName}>sort by name</button>
        <button onClick={this.sortByPop}>sort by popularity</button>
        </div>
        <table>
          {contacts.map((value, index) => {
            return (
              <tr>
                <th>
                  <img src={value.pictureUrl} />
                </th>
                <th>{value.name}</th>
                <th>{value.popularity}</th>
                <th>
                  <button onClick={() => this.delete(index)}>
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default App;
