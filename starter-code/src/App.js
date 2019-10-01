import React, { Component } from "react";
// import logo from './logo.svg';
import "./stylesheets/App.css";
import "./stylesheets/buttons.css";
import Contact from "./Contact.js";
import Contacts from "./contacts.json";

class App extends Component {
  constructor() {
    super();
    this.allContacts = [...Contacts];
    this.fixedContacts = this.allContacts.splice(0, 5);
    this.state = {
      contacts: this.fixedContacts
    };
  }

  getRandomContact() {
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let randomGuy = this.allContacts[getRandomInt(0, this.allContacts.length)];
    let clonedContacts = [...this.state.contacts];
    clonedContacts.push(randomGuy);

    this.setState({
      ...this.state,
      contacts: clonedContacts,
      isSortedByName: false,
      isSortedByPop: false
    });
  }

  sortByPopularity() {
    let order;
    let sortedByPop = this.state.contacts.sort((a, b) => {
      if (this.state.isSortedByPop === true) {
        order = false;
        return a.popularity > b.popularity ? 1 : -1;
      } else {
        order = true;
        return a.popularity < b.popularity ? 1 : -1;
      }
    });

    this.setState({
      ...this.state,
      contacts: sortedByPop,
      isSortedByPop: order
    });
  }

  sortByName() {
    let order;
    let sortedByName = this.state.contacts.sort((a, b) => {
      if (this.state.isSortedByName === true) {
        order = false;
        return a.name > b.name ? 1 : -1;
      } else {
        order = true;
        return a.name < b.name ? 1 : -1;
      }
    });

    this.setState({
      ...this.state,
      contacts: sortedByName,
      isSortedByName: order
    });
  }

  deleteContact(idx) {
    let clonedContacts = [...this.state.contacts];
    clonedContacts.splice(idx, 1);

    this.setState({
      ...this.state,
      contacts: clonedContacts
    });
  }

  render() {
    return (
      <div className="root">
        <div className="wrapper">
          <h1 className="title">IronContacts</h1>
          <div className="all-buttons">
            <button
              className="button random-guy"
              onClick={() => this.getRandomContact()}
            >
              Random Dude
            </button>
            <button
              className="button sort-pop"
              onClick={() => this.sortByPopularity()}
            >
              Sort By Popularity
            </button>
            <button
              className="button sort-guys"
              onClick={() => this.sortByName()}
            >
              Sort By Name
            </button>
          </div>
          <div className="table-titles">
            <h2>Picture</h2>
            <h2>Name</h2>
            <h2>Popularity</h2>
          </div>
          {this.state.contacts.map((cont, idx) => (
            <Contact
              key={idx}
              {...cont}
              onClick={() => this.deleteContact(idx)}
            ></Contact>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
