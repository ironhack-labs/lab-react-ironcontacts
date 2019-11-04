import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import initial_conditions from "./utils/contactsLogic.js";
import { rest_contacts } from "./utils/contactsLogic.js";
import Table from "../src/components/Table.js";
import Button from "../src/components/Button.js";
import sortName from "./utils/sortName.js";
import sortPopularity from "./utils/sortPopularity.js";

class App extends Component {
  state = {
    contacts: initial_conditions
  };

  addRandomContact = () => {
    let contactsCopy = [...this.state.contacts];
    const randomNumber = Math.floor(Math.random() * rest_contacts.length);
    const newContact = rest_contacts[randomNumber];
    contactsCopy.push(newContact);
    this.setState({
      contacts: contactsCopy
    });
  };

  sortByName = () => {
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort(sortName);
    this.setState({
      contacts: contactsCopy
    });
  };

  sortByPopularity = () => {
    let contactsCopy = [...this.state.contacts];
    contactsCopy.sort(sortPopularity);
    this.setState({
      contacts: contactsCopy
    });
  };

  handleDelete = contactIndex => {
    console.log(contactIndex);
    let contactsCopy = [...this.state.contacts];
    contactsCopy.splice(contactIndex, 1);
    this.setState({
      contacts: contactsCopy
    });
  };

  render() {
    console.log(this.state.contacts);
    return (
      <div className="App">
        <div className="main-container">
          <div>
            <h1>Iron Contacts</h1>
          </div>
          <div>
            <Button
              ability={this.addRandomContact}
              text={"Add Random Contact"}
            />
            <Button ability={this.sortByName} text={"Sort by name"} />
            <Button
              ability={this.sortByPopularity}
              text={"Sort by Popularity"}
            />
          </div>
          <div>
            <Table
              contacts={this.state.contacts}
              onDelete={this.handleDelete}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
