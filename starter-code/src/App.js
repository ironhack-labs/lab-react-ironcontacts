import React, { Component } from "react";
import "./App.css";
import contacts from "./contacts.json";
import ContactTable from "./components/ContactTable"

class App extends Component {
  state = {
    initialContacts: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]],
  };

  addRandomContact = () => {
    let {initialContacts} = this.state;
    initialContacts.push(contacts[Math.floor(Math.random() * contacts.length)])
    this.setState({initialContacts})
  }

  compareName = (a, b) => {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }

  comparePopularity = (a, b) => {
    if ( a.popularity < b.popularity ){
      return 1;
    }
    if ( a.popularity > b.popularity ){
      return -1;
    }
    return 0;
  }

  sortByName = () => {
    let {initialContacts} = this.state;
    initialContacts.sort(this.compareName);
    this.setState({initialContacts})
  }

  sortByPopularity = () => {
    let {initialContacts} = this.state;
    initialContacts.sort(this.comparePopularity);
    this.setState({initialContacts})
  }

  render() {
    const { initialContacts } = this.state;
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.addRandomContact}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by name</button>
        <button onClick={this.sortByPopularity}>Sort by popularity</button>
        <ContactTable initialContacts={initialContacts} contacts={contacts} />
      </div>
    );
  }
}

export default App;
