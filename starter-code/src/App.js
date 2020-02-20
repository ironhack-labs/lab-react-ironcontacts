import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./Table";
import contacts from "./contacts.json";

class App extends Component {
  state = {
    contactData: contacts.slice(0, 5)
  };

  // simple addRandom function, not checking for duplicates
  // addRandom = () => {
  //   // find a random contact
  //   const random = contacts[Math.floor(Math.random() * contacts.length)];
  //   // append/prepend to the array of contacts in the state
  //   this.setState({
  //     contactData: [random, ...this.state.contactData]
  //   });
  // };

  addRandom = () => {
    let found;
    while (!found && this.state.contactData.length < contacts.length) {
      // find a random contact that is not already in the state
      const random = contacts[Math.floor(Math.random() * contacts.length)];

      if (
        !this.state.contactData.find(contact => {
          return contact.id === random.id;
        })
      ) {
        found = random;
      }
      // assign the random contact to found
    }

    if (found) {
      this.setState({
        contactData: [found, ...this.state.contactData]
      });
    }
  };

  sortByName = () => {
    this.setState({
      contactData: this.state.contactData.slice().sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        } else {
          return 1;
        }
      })
    });
  };

  sortByPopularity = () => {
    this.setState({
      contactData: this.state.contactData.slice().sort((a, b) => {
        return b.popularity - a.popularity;
      })
    });
  };

  deleteContact = index => {
    console.log("deleteContact", index);
    // filter the array of contacts to exclude the element at a given index
    const withoutContact = [...this.state.contactData];
    withoutContact.splice(index, 1);

    this.setState({
      contactData: withoutContact
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandom}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>

        <Table
          deleteContact={this.deleteContact}
          contacts={this.state.contactData}
        />
      </div>
    );
  }
}

export default App;
