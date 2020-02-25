import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import Table from "./components/Table";

class App extends Component {
  state = {
    contactsList: contacts.slice(0, 5)
  };

  addContact = () => {
    const contactsArr = this.state.contactsList;
    const randomNumber = Math.floor(Math.random() * contacts.length);
    contactsArr.unshift(contacts[randomNumber]);
    this.setState({ contactsList: contactsArr });
  };

  sortContactsByName = () => {
    const contactsArr = this.state.contactsList;
    contactsArr.sort(function(a, b) {
      var nameA = a.name.toUpperCase(); // ignore upper and lowercase
      var nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    this.setState({ contactsList: contactsArr });
  };

  sortContactsByPop = () => {
    const contactsArr = this.state.contactsList;
    contactsArr.sort(function(a, b) {
      var nameA = a.popularity;
      var nameB = b.popularity;
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    });
    this.setState({ contactsList: contactsArr });
  };

  deleteContact = id => {
    const contactsArr = this.state.contactsList;
    const newContactsArr = contactsArr.filter(
      contactObj => contactObj.id !== id
    );
    this.setState({ contactsList: newContactsArr });
  };

  render() {
    return (
      <div className="App" className="container">
        <h1 align="center">Iron Contacts</h1>
        <div className="btns">
        <button class="btn btn-success" onClick={this.addContact}> Add Random Contact </button>
        <button class="btn btn-info" onClick={this.sortContactsByName}> Sort by Name</button>
        <button class="btn btn-info" onClick={this.sortContactsByPop}> Sort by Popularity </button>
        </div>

        <table class="table">
          <thead class="thead-dark">
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Popularity</th>
            <th scope="col">Delete?</th>
          </thead>
          <tbody>
            {this.state.contactsList.map(contactObj => {
              return (
                <Table
                  contact={contactObj}
                  deleteContact={this.deleteContact}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
