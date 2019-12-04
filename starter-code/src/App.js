import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
import contacts from "./contacts.json";
import ContactRow from "./components/contactRow.js";
import { Header, MainTable } from "./styles/components";

class App extends Component {
  state = {
    contacts: contacts.splice(0, 5)
  };
  deleteContact = idx => {
    const ContactsArray = this.state.contacts;
    ContactsArray.splice(idx, 1);
    this.setState({
      contacts: ContactsArray
    });
  };

  addRandomContact = () => {
    const newContact = contacts[Math.floor(Math.random() * contacts.length)];
    const newContactList = this.state.contacts;
    newContactList.push(newContact);
    this.setState({
      contacts: newContactList
    });
  };
  sortByName = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) => a.name.localeCompare(b.name))
    });
  };
  sortByPopularity = () => {
    this.setState({
      contacts: this.state.contacts.sort((a, b) =>
        String(a.popularity).localeCompare(String(b.popularity))
      )
    });
  };

  render() {
    return (
      <MainTable>
        <h1>IronContacts</h1>
        <br />

        <div>
          <button onClick={() => this.addRandomContact()}>
            Add Random Contact
          </button>
          <button onClick={() => this.sortByName()}>Sort By Name </button>
          <button onClick={() => this.sortByPopularity()}>
            Sort By Popularity
          </button>
        </div>
        <Header>
          <p>Image</p>
          <p>Name</p>
          <p>Popularity</p>
          <p>Delete</p>
        </Header>

        {this.state.contacts.map((item, index) => (
          <ContactRow
            {...item}
            key={index}
            index={index}
            deleteContact={this.deleteContact}
          />
        ))}
      </MainTable>
    );
  }
}

export default App;
