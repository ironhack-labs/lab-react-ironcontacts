import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import contactsFromJson from "./contacts.json";
import Page from "./components/Page/Page";

class App extends Component {
  state = {
    contacts: contactsFromJson.slice(0, 5),
    sortedByName: false,
    sortedByPopularity: false,
  };

  handleAdd = () => {
    const contacts = [...this.state.contacts];
    const restOfContacts = contactsFromJson.slice(5);
    const randomMovie =
      restOfContacts[Math.floor(Math.random() * restOfContacts.length)];
    contacts.push(randomMovie);
    this.setState({
      contacts,
    });
  };

  sortByName = () => {
    // const contacts = [...this.state.contacts];
    // const sorted = contacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    this.setState({
      sortedByName: !this.state.sortedByName,
      sortedByPopularity: false,
    });
  };

  sortByPopularity = () => {
    console.log(this.state.sortedByPopularity);
    this.setState({
      sortedByName: false,
      sortedByPopularity: !this.state.sortedByPopularity,
    });
  };

  render() {
    const displayContacts = [...this.state.contacts];
    if (this.state.sortedByName) {
      displayContacts.sort((a, b) => (a.name > b.name ? 1 : -1));
    } else if (this.state.sortedByPopularity) {
      displayContacts.sort((a, b) => a.popularity - b.popularity);
    }
    return (
      <>
        <h1>IronContacts</h1>
        <div className="buttons">
          <button
            style={{ padding: "1em", marginBottom: "1em" }}
            onClick={this.handleAdd}
          >
            Add random contact
          </button>
          <button
            style={{ padding: "1em", marginBottom: "1em" }}
            onClick={this.sortByName}
          >
            Sort by name
          </button>
          <button
            style={{ padding: "1em", marginBottom: "1em" }}
            onClick={this.sortByPopularity}
          >
            Sort by popularity
          </button>
        </div>
        <Page contacts={displayContacts} />
      </>
    );
  }
}

export default App;
