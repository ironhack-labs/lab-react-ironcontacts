import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactTable from "./components/ContactTable";

class App extends Component {
  state = {
    initialContacts: [
      contacts[0],
      contacts[1],
      contacts[2],
      contacts[3],
      contacts[4]
    ]
  };

  addRandomContact = () => {
    let { initialContacts } = this.state;
    let randomContacts = [];
    randomContacts.push(contacts[Math.floor(Math.random() * contacts.length)]);
    for(var i=0;i<initialContacts.length;i++){
      if (initialContacts.indexOf(randomContacts[0]) == -1) initialContacts.push(randomContacts[0])
    }
    this.setState({ initialContacts });
  };

  compareName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  comparePopularity = (a, b) => {
    if (a.popularity < b.popularity) {
      return 1;
    }
    if (a.popularity > b.popularity) {
      return -1;
    }
    return 0;
  };

  sortByName = () => {
    let { initialContacts } = this.state;
    initialContacts.sort(this.compareName);
    this.setState({ initialContacts });
  };

  sortByPopularity = () => {
    let { initialContacts } = this.state;
    initialContacts.sort(this.comparePopularity);
    this.setState({ initialContacts });
  };

  deleteItem = index => {
    let { initialContacts } = this.state;
    initialContacts.splice(index, 1);
    this.setState({ initialContacts });
  };

  render() {
    const { initialContacts } = this.state;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button
          onClick={this.addRandomContact}
          className="uk-button uk-button-primary main-button"
        >
          Add Random Contact
        </button>
        <button
          onClick={this.sortByName}
          className="uk-button uk-button-default main-button"
        >
          Sort by name
        </button>
        <button
          onClick={this.sortByPopularity}
          className="uk-button uk-button-default main-button"
        >
          Sort by popularity
        </button>
        <ContactTable
          initialContacts={initialContacts}
          contacts={contacts}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}

export default App;
