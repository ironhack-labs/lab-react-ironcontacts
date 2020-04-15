import React, { Component } from "react";
import Contacts from "../../contacts.json";

export default class AddRandom extends Component {
  state = {
    addContacts: Contacts.slice(0, 5),
  };

  addRandom = () => {
    this.setState({
      addContacts: this.state.addContacts.concat(
        Contacts[Math.floor(Math.random() * Contacts.length)]
      ),
    });
  };
  render() {
    return (
      <div>
        <button
          className="App-button"
          onClick={this.handleClickNewRandomContact}
        >
          Add Random Contact
        </button>
      </div>
    );
  }
}
